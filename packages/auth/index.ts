"use server";
import "server-only";

import { cacheTag, revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./server";

export async function currentUser() {
  "use cache: private";
  cacheTag("user-logout");

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });

  revalidateTag("user-logout", "max");
}

export async function requireAuthenticatedUser(redirectTo: string) {
  const user = await currentUser();

  if (!user) {
    redirect(redirectTo);
  }

  return user;
}
