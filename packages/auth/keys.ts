import { createEnv } from "@t3-oss/env-nextjs";
import { keys as database } from "@repo/database/keys";

export const keys = () =>
  createEnv({
    extends: [database()],
    runtimeEnv: {},
  });
