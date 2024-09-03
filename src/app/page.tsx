import { auth } from "@/auth/auth";
import { api } from "@/http/api-client";

export default async function Home() {
  const { establishment } = await auth();

  return <main>{JSON.stringify(establishment)}</main>;
}
