import Link from "next/link";
import {
  Award,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import styles from "@/components/animations/css/header/MainNavigation.module.css";

interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: "How it works",
    href: "/#how-it-works",
    icon: WandSparkles,
    ariaLabel: "Learn how Smile Bank works",
  },
  {
    label: "Privacy",
    href: "/#privacy",
    icon: ShieldCheck,
    ariaLabel: "Learn about Smile Bank privacy",
  },
  {
    label: "Awards",
    href: "/#awards",
    icon: Award,
    ariaLabel: "Explore Smile of the World awards",
  },
];

export default function MainNavigation() {
  return (
    <nav
      className={styles.mainNavigation}
      aria-label="Primary navigation"
    >
      {navigationItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={styles.navLink}
            aria-label={item.ariaLabel}
          >
            <Icon
              size={16}
              strokeWidth={1.9}
              className={styles.navIcon}
              aria-hidden="true"
            />

            <span className={styles.navLabel}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}