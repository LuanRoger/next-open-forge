import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { database } from "@repo/database";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(database, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies(), username()],
});
