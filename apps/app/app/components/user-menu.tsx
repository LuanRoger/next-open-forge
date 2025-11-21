import { currentUser } from "@repo/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/design-system/components/ui/dropdown-menu";
import { Skeleton } from "@repo/design-system/components/ui/skeleton";
import { LogOutIcon } from "lucide-react";
import { signOut } from "@repo/auth";
import UserAvatar from "./user-avatar";

export default async function UserMenu() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const username = user.username ?? user.name;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar username={username} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={signOut}>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function UserMenuLoading() {
  return <Skeleton className="size-8 rounded-full" />;
}
