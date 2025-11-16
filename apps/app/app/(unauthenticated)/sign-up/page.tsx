import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import SignUpForm from "./components/sign-up-form";
import Link from "@/app/components/link";

const title = "Create an account";
const description = "Enter your details to get started.";

export const metadata: Metadata = createMetadata({ title, description });

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-2">
      <SignUpForm />
      <Link className="self-end" href="/sign-in">
        <span>Already have an account? Sign in</span>
      </Link>
    </div>
  );
}
