import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import githubIcon from "@/assets/github-icon.svg";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" type="name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" id="email" type="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          autoComplete="new-password"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Confirm Password</Label>
        <Input
          name="password_confirmation"
          id="password_confirmation"
          type="password_confirmation"
          autoComplete="new-password"
        />
      </div>

      <Button type="submit" className="w-full">
        Create account
      </Button>

      <Button variant="link" className="w-full" size="sm" asChild>
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>
    </form>
  );
}
