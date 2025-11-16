"use server";
import "server-only";

import { cacheTag, revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_TAGS_KEY } from "./constants";
import { auth } from "./server";

export async function currentUser() {
  "use cache: private";
  cacheTag(AUTH_TAGS_KEY.USER_LOGOUT);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });

  revalidateTag(AUTH_TAGS_KEY.USER_LOGOUT, "max");
}

export async function requireAuthenticatedUser(redirectTo: string) {
  const user = await currentUser();

  if (!user) {
    redirect(redirectTo);
  }

  return user;
}
