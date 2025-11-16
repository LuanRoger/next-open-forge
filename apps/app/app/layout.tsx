import "./styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html className={fonts} lang="en" suppressHydrationWarning>
      <body>
        <AnalyticsProvider>
          <DesignSystemProvider>{children}</DesignSystemProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
