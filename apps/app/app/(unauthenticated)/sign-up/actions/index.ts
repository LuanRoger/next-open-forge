"use server";

import { signUpEmail } from "@repo/auth";
import { generateUsername } from "@repo/auth/utils/username";
import { redirect } from "next/navigation";
import type { SignUpFormSchema } from "../schemas";
import { analytics } from "@repo/product";

export async function signUpSubmit(data: SignUpFormSchema) {
  const { firstName, lastName, email, password } = data;
  const name = `${firstName} ${lastName}`;
  const username = generateUsername(firstName, lastName);

  const user = await signUpEmail(name, username, email, password);

  if (!user) {
    return null;
  }

  const { id } = user;
  analytics.identify(id, {
    properties: {
      email,
      name,
    },
  });
  redirect("/");
}
