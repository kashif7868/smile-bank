"use client";

import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  Award,
  Camera,
  House,
  Images,
  UserRound,
} from "lucide-react";

import type {
  LucideIcon,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

import styles from "@/components/animations/css/header/MobileBottomNav.module.css";

interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  protected?: boolean;
  primary?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Vault",
    href: "/vault",
    icon: Images,
    protected: true,
  },
  {
    label: "Deposit",
    href: "/capture",
    icon: Camera,
    protected: true,
    primary: true,
  },
  {
    label: "Awards",
    href: "/awards",
    icon: Award,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
    protected: true,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  );

  const isMobileMenuOpen = useUIStore(
    (state) => state.isMobileMenuOpen,
  );

  const isActiveRoute = (
    href: string,
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  /* =======================================================
     NAVIGATE
  ======================================================= */

  const navigateToRoute = (
    item: NavigationItem,
  ) => {
    if (
      item.protected &&
      !isAuthenticated
    ) {
      const redirect =
        encodeURIComponent(
          item.href,
        );

      router.push(
        `/auth?mode=sign-in&redirect=${redirect}`,
      );

      return;
    }

    router.push(item.href);
  };

  /* =======================================================
     HIDE NAV
  ======================================================= */

  const isCaptureRoute =
    pathname === "/capture" ||
    pathname.startsWith(
      "/capture/",
    );

  if (
    isMobileMenuOpen ||
    isCaptureRoute
  ) {
    return null;
  }

  return (
    <nav
      className={styles.nav}
      aria-label="Smile Bank mobile navigation"
    >
      <div className={styles.inner}>
        {navigationItems.map(
          (item) => {
            const Icon =
              item.icon;

            const isActive =
              isActiveRoute(
                item.href,
              );

            /* =============================================
               PRIMARY DEPOSIT BUTTON
            ============================================== */

            if (item.primary) {
              return (
                <button
                  key={item.href}
                  type="button"
                  className={`${styles.primaryItem} ${
                    isActive
                      ? styles.primaryItemActive
                      : ""
                  }`}
                  onClick={() =>
                    navigateToRoute(
                      item,
                    )
                  }
                  aria-label="Deposit a new smile"
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  <span
                    className={`${styles.primaryButton} ${
                      isActive
                        ? styles.primaryActive
                        : ""
                    }`}
                  >
                    <Icon
                      size={25}
                      strokeWidth={2.1}
                      aria-hidden="true"
                    />

                    <span
                      className={
                        styles.primaryGlow
                      }
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    className={
                      styles.primaryLabel
                    }
                  >
                    {item.label}
                  </span>
                </button>
              );
            }

            /* =============================================
               PROTECTED ROUTES
            ============================================== */

            if (
              item.protected &&
              !isAuthenticated
            ) {
              return (
                <button
                  key={item.href}
                  type="button"
                  className={
                    styles.item
                  }
                  onClick={() =>
                    navigateToRoute(
                      item,
                    )
                  }
                  aria-label={`${item.label} requires sign in`}
                >
                  <span
                    className={
                      styles.iconWrapper
                    }
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.85}
                      className={
                        styles.icon
                      }
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    className={
                      styles.label
                    }
                  >
                    {item.label}
                  </span>
                </button>
              );
            }

            /* =============================================
               NORMAL ROUTES
            ============================================== */

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.item} ${
                  isActive
                    ? styles.activeItem
                    : ""
                }`}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
              >
                <span
                  className={
                    styles.iconWrapper
                  }
                >
                  <Icon
                    size={20}
                    strokeWidth={
                      isActive
                        ? 2.2
                        : 1.85
                    }
                    className={`${styles.icon} ${
                      isActive
                        ? styles.activeIcon
                        : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className={`${styles.label} ${
                    isActive
                      ? styles.activeLabel
                      : ""
                  }`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <span
                    className={
                      styles.activeDot
                    }
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          },
        )}
      </div>
    </nav>
  );
}