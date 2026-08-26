import Link from "next/link";
import {
  Award,
  Camera,
  FileText,
  Images,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import styles from "@/components/animations/css/footer/FooterNavigation.module.css";

interface FooterLinkItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface FooterLinkGroup {
  title: string;
  items: FooterLinkItem[];
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Explore",
    items: [
      {
        label: "How it works",
        href: "/#how-it-works",
        icon: Sparkles,
      },
      {
        label: "Privacy",
        href: "/#privacy",
        icon: ShieldCheck,
      },
      {
        label: "Awards",
        href: "/#awards",
        icon: Award,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Smile Vault",
        href: "/vault",
        icon: Images,
      },
      {
        label: "Deposit a smile",
        href: "/capture",
        icon: Camera,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: UserRound,
      },
    ],
  },
  {
    title: "Trust",
    items: [
      {
        label: "Privacy Policy",
        href: "/privacy",
        icon: ShieldCheck,
      },
      {
        label: "Terms",
        href: "/terms",
        icon: FileText,
      },
      {
        label: "Consent Policy",
        href: "/consent-policy",
        icon: LockKeyhole,
      },
    ],
  },
];

export default function FooterNavigation() {
  return (
    <nav
      className={styles.navigation}
      aria-label="Footer navigation"
    >
      {footerLinkGroups.map((group) => (
        <div
          key={group.title}
          className={styles.column}
        >
          <h2 className={styles.columnTitle}>
            {group.title}
          </h2>

          <ul className={styles.linkList}>
            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.footerLink}
                  >
                    <span className={styles.linkIcon}>
                      <Icon
                        size={15}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </span>

                    <span className={styles.linkLabel}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}