import { auth } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const { user } = await auth();

  return (
    <main>
      <div>{JSON.stringify(user)}</div>

      <Button asChild>
        <Link href="/api/auth/sign-out">Sign Out</Link>
      </Button>
    </main>
  );
}
