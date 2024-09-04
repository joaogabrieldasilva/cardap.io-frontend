import { getUserProfile } from "@/http/get-user-profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function isAuthenticated() {
  return !!cookies().get("token")?.value;
}

export async function auth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/auth/sign-in");
  }

  try {
    const user = await getUserProfile();

    return { user };
  } catch (error) {
    console.error(error);
  }

  redirect("/api/auth/sign-out");
}
