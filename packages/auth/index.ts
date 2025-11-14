import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./server";

export async function currentUser() {
  const session = await auth.api.getSession({
    headers: await headers(), // from next/headers
  });
  if (!session?.user) {
    return redirect("/sign-in"); // from next/navigation
  }
  return session.user;
}
