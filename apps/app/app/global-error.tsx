"use client";

import { analytics } from "@repo/product";
import { Button } from "@repo/design-system/components/ui/button";
import { fonts } from "@repo/design-system/lib/fonts";
import type NextError from "next/error";
import { useEffect } from "react";

type GlobalErrorProperties = {
  readonly error: NextError & { digest?: string };
  readonly reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProperties) {
  useEffect(() => {
    analytics.captureException(error);
  }, [error]);

  return (
    <html className={fonts} lang="en">
      <body>
        <h1>Oops, something went wrong</h1>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
