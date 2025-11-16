import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import SignInForm from "./components/sign-in-form";

const title = "Welcome back";
const description = "Enter your details to sign in.";

export const metadata: Metadata = createMetadata({ title, description });

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      <SignInForm />
      <Link href="/sign-up" className="self-end">
        <span className="text-muted-foreground text-sm hover:underline">
          Does not have an account? Sign up
        </span>
      </Link>
    </div>
  );
}
