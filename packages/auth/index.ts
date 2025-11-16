import { headers } from "next/headers";
import { auth } from "./server";

export async function currentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
}
