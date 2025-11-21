"use server";

import {
  requireAuthenticatedUser as authRequireAuthenticatedUser,
  requireUnauthenticatedUser as authRequireUnauthenticatedUser,
} from "@repo/auth";

export async function requireAuthenticatedUser() {
  return await authRequireAuthenticatedUser("/sign-in");
}

export async function requireUnauthenticatedUser() {
  return await authRequireUnauthenticatedUser("/");
}
