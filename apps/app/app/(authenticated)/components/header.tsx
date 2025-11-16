import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";
import { Separator } from "@repo/design-system/components/ui/separator";
import { SidebarTrigger } from "@repo/design-system/components/ui/sidebar";
import { Fragment, Suspense } from "react";
import UserMenu, { UserMenuLoading } from "@/app/components/user-menu";

type HeaderProps = {
  pages: string[];
  page: string;
};

export const Header = ({ pages, page }: HeaderProps) => (
  <header className="flex h-16 shrink-0 items-center justify-between gap-2">
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger />
      <Separator className="mr-2 h-4" orientation="vertical" />
      <Breadcrumb>
        <BreadcrumbList>
          {pages.map((page, index) => (
            <Fragment key={page}>
              {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">{page}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{page}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <Suspense fallback={<UserMenuLoading />}>
      <UserMenu />
    </Suspense>
  </header>
);
