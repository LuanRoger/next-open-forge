import { cn } from "@repo/design-system/lib/utils";
import { default as NextLink } from "next/link";

type LinkProps = React.ComponentProps<typeof NextLink>;

export default function Link({ className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn("text-muted-foreground text-sm hover:underline", className)}
      {...props}
    />
  );
}
