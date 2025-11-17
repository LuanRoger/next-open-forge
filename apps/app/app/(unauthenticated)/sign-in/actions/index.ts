"use server";

import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import type { SignInFormSchema } from "../schemas";

export async function signInSubmit(data: SignInFormSchema) {
  const { email, password } = data;

  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if (!result.token) {
    return;
  }

  redirect("/");
}
