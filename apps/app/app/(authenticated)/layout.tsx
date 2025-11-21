import { SidebarProvider } from "@repo/design-system/components/ui/sidebar";
import { type ReactNode, Suspense } from "react";
import { requireAuthenticatedUser } from "../actions/auth";
import GlobalSidebar from "./components/sidebar";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

async function AppLayoutContent({ children }: AppLayoutProperties) {
  await requireAuthenticatedUser();

  return (
    <SidebarProvider>
      <GlobalSidebar>{children}</GlobalSidebar>
    </SidebarProvider>
  );
}

export default function AppLayout({ children }: AppLayoutProperties) {
  return (
    <Suspense>
      <AppLayoutContent>{children}</AppLayoutContent>
    </Suspense>
  );
}
