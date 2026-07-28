import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/components/ui/utils";

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "quiet";
};

export function LinkButton({
  className,
  variant = "secondary",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn("button", `button--${variant}`, className)}
      data-slot="link-button"
      {...props}
    />
  );
}
