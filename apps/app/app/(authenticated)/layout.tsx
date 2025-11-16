import { currentUser } from "@repo/auth";
import { SidebarProvider } from "@repo/design-system/components/ui/sidebar";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { GlobalSidebar } from "./components/sidebar";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProperties) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <GlobalSidebar>{children}</GlobalSidebar>
    </SidebarProvider>
  );
}
