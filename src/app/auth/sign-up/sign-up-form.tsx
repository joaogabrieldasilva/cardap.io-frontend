"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import githubIcon from "@/assets/github-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useMask } from "@react-input/mask";
import { useFormState } from "@/hooks/use-form-state";
import { signUpWithEmailAndPassword } from "./actions";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function SignUpForm() {
  const phoneInputRef = useMask({
    mask: "(__) _ ____-____",
    replacement: { _: /\d/ },
  });

  const [{ errors, message, success }, formAction, isPending] = useFormState(
    signUpWithEmailAndPassword
  );

  return (
    <form onSubmit={formAction} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign in failed!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" type="name" disabled={isPending} />
        {errors?.name && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.name[0]}
          </p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" id="email" type="email" disabled={isPending} />
        {errors?.email && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="phone">Phone</Label>
        <Input
          ref={phoneInputRef}
          name="phone"
          id="phone"
          type="phone"
          disabled={isPending}
        />
        {errors?.phone && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.phone[0]}
          </p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          autoComplete="new-password"
          disabled={isPending}
        />
        {errors?.password && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.password[0]}
          </p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Confirm Password</Label>
        <Input
          name="password_confirmation"
          id="password_confirmation"
          type="password_confirmation"
          autoComplete="new-password"
          disabled={isPending}
        />
        {errors?.["password_confirmation"] && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors["password_confirmation"][0]}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        {!isPending ? (
          "Create account"
        ) : (
          <Loader2 className="size-4 animate-spin" />
        )}
      </Button>

      <Button variant="link" className="w-full" size="sm" asChild>
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>
    </form>
  );
}
