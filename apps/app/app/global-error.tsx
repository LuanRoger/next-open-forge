"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { fonts } from "@repo/design-system/lib/fonts";
import type NextError from "next/error";

type GlobalErrorProperties = {
  readonly error: NextError & { digest?: string };
  readonly reset: () => void;
};

const GlobalError = ({ reset }: GlobalErrorProperties) => (
  <html className={fonts} lang="en">
    <body>
      <h1>Oops, something went wrong</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </body>
  </html>
);

export default GlobalError;
