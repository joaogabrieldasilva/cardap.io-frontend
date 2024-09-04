"use server";

import { signUpWithPassword } from "@/http/sign-up-with-password";
import { HTTPError } from "ky";
import { cookies } from "next/headers";
import { z } from "zod";

const signInSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please provide a valid name" })
    .min(3, { message: "Name should be at least 3 characters long" }),
  phone: z.string().min(14, { message: "Please provide a valid phone" }),
  email: z.string().email({ message: "Please provide a valid e-mail address" }),
  password: z.string().min(1, { message: "Please provide your password" }),
  password_confirmation: z
    .string()
    .min(1, { message: "Please provide your confirmation password" }),
});

export async function signUpWithEmailAndPassword(data: FormData) {
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
    const { name, phone, email, password } = result.data;

    const response = await signUpWithPassword({
      name,
      phone,
      email,
      password,
    });

    cookies().set("token", response.token, {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

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
