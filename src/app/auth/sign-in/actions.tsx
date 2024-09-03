"use server";

import { signInWithPassword } from "@/http/sign-in-with-password";
import { HTTPError } from "ky";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Please provide a valid e-mail address" }),
  password: z.string().min(1, { message: "Please provide your password" }),
});

export async function signInWithEmailAndPassword(data: FormData) {
  const formData = Object.fromEntries(data);
  const result = signInSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      message: null,
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // const { email, password } = result.data;

    // return await signInWithPassword({
    //   email,
    //   password,
    // });

    cookies().set("token", "123", { maxAge: 60 * 60 * 24 * 7, path: "/" });

    return {
      success: true,
      message: null,
      errors: null,
    };
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return {
        success: false,
        message,
        errors: null,
      };
    }

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    };
  }
}
