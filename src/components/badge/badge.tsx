import type { PropsWithChildren } from "react";
import styles from "./badge.module.css";
import cn from "classnames";

export type BadgeVariant =
  | "light"
  | "dark"
  | "warning"
  | "danger"
  | "success"
  | "link"
  | "info";

type BadgeProps = PropsWithChildren & {
  variant: BadgeVariant;
};

export function Badge({ children, variant }: BadgeProps) {
  return (
    <span className={cn(styles.badge, getVariantStyle(variant))}>
      {children}
    </span>
  );
}

function getVariantStyle(variant: BadgeVariant): string {
  switch (variant) {
    case "light":
      return styles.light;
    case "dark":
      return styles.dark;
    case "warning":
      return styles.warning;
    case "danger":
      return styles.danger;
    case "success":
      return styles.success;
    case "link":
      return styles.link;
    case "info":
      return styles.info;
    default: {
      const neverVariant: never = variant;
      console.warn("Invalid badge variant:", neverVariant);
      return styles.light;
    }
  }
}
