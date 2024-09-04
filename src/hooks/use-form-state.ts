import { FormEvent, useState, useTransition } from "react";

type FormState = {
  errors: Record<string, string[]> | null;
  message: string | null;
  success: boolean;
};

export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => void,
  initialState?: FormState
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<FormState>(
    initialState ?? {
      errors: null,
      message: null,
      success: false,
    }
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      setFormState(state);
      if (state.success && onSuccess) {
        onSuccess();
      }
    });
  }

  return [formState, handleSubmit, isPending] as const;
}
