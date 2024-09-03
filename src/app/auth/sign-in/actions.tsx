"use server";

import { signInWithPassword } from "@/http/sign-in-with-password";
import { HTTPError } from "ky";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Please provide a valid e-mail address" }),
  password: z.string().min(1, { message: "Please provide your password" }),
});

export async function signInWithEmailAndPassword(
  previousState: any,
  data: FormData
) {
  const formData = Object.fromEntries(data);
  const result = signInSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      message: null,
      errors: result.error.flatten().fieldErrors,
      payload: {
        email: formData.email.toString(),
        password: formData.password.toString(),
      },
    };
  }

  try {
    // const { email, password } = result.data;

    // return await signInWithPassword({
    //   email,
    //   password,
    // });

    return {
      success: true,
      message: null,
      errors: null,
      payload: result.data,
    };
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return {
        success: false,
        message,
        errors: null,
        payload: result.data,
      };
    }

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
      payload: result.data,
    };
  }
}
