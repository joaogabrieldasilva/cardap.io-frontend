import { auth } from "@/auth/auth";

export default async function Home() {
  const { user } = await auth();

  return <main>{JSON.stringify(user)}</main>;
}
