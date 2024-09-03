"use client";

import githubIcon from "@/assets/github-icon.svg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useFormState } from "@/hooks/use-form-state";
import { AlertTriangle, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "./actions";
import { useRouter } from "next/navigation";

export function SignInForm() {
  const router = useRouter();

  const [{ success, errors, message }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => router.push("/")
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign in failed!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" id="email" />
        {errors?.email && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
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
        />
        {errors?.password && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.password[0]}
          </p>
        )}
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {!isPending ? (
          "Sign in with e-mail"
        ) : (
          <Loader2 className="size-4 animate-spin" />
        )}
      </Button>

      <Button
        variant="link"
        className="w-full"
        size="sm"
        asChild
        disabled={isPending}
      >
        <Link href="/auth/sign-up">Create new account</Link>
      </Button>
    </form>
  );
}
