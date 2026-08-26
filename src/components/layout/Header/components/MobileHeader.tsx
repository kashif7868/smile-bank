"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Award,
  Camera,
  ChevronRight,
  LockKeyhole,
  LogIn,
  Menu,
  ShieldCheck,
  Sparkles,
  UserPlus,
  WandSparkles,
  X,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import styles from "@/components/animations/css/header/MobileHeader.module.css";

interface MobileNavigationItem {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const mobileNavigationItems: MobileNavigationItem[] = [
  {
    label: "How it works",
    description: "Capture, choose and preserve your smile",
    href: "/#how-it-works",
    icon: WandSparkles,
  },
  {
    label: "Privacy",
    description: "You control what stays private",
    href: "/#privacy",
    icon: ShieldCheck,
  },
  {
    label: "Awards",
    description: "Discover Smile of the World",
    href: "/#awards",
    icon: Award,
  },
];

export default function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.mobileHeader}>
      <button
        type="button"
        className={`${styles.menuButton} ${
          isMenuOpen ? styles.menuButtonOpen : ""
        }`}
        onClick={toggleMenu}
        aria-label={
          isMenuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation-menu"
      >
        {isMenuOpen ? (
          <X
            size={21}
            strokeWidth={2}
            aria-hidden="true"
          />
        ) : (
          <Menu
            size={21}
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </button>

      <div
        id="mobile-navigation-menu"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={styles.backdrop}
          onClick={closeMenu}
          aria-label="Close navigation menu"
          tabIndex={isMenuOpen ? 0 : -1}
        />

        <div className={styles.menuPanel}>
          <div className={styles.menuHeader}>
            <div className={styles.menuHeading}>
              <span className={styles.menuEyebrow}>
                Smile Bank
              </span>

              <span className={styles.menuTitle}>
                Your smile space
              </span>
            </div>

            <span className={styles.privateBadge}>
              <LockKeyhole
                size={12}
                strokeWidth={2}
                aria-hidden="true"
              />

              Private
            </span>
          </div>

          <Link
            href="/capture"
            className={styles.depositCard}
            onClick={closeMenu}
          >
            <span className={styles.depositIcon}>
              <Camera
                size={21}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span className={styles.depositContent}>
              <span className={styles.depositTopline}>
                <Sparkles
                  size={12}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                AI assisted
              </span>

              <strong>
                Deposit a smile
              </strong>

              <span>
                Capture your moment and let AI help
                select the best shot.
              </span>
            </span>

            <ChevronRight
              size={18}
              strokeWidth={1.9}
              className={styles.depositArrow}
              aria-hidden="true"
            />
          </Link>

          <nav
            className={styles.mobileNavigation}
            aria-label="Mobile navigation"
          >
            {mobileNavigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navigationItem}
                  onClick={closeMenu}
                >
                  <span className={styles.navigationIcon}>
                    <Icon
                      size={19}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </span>

                  <span className={styles.navigationContent}>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </span>

                  <ChevronRight
                    size={18}
                    strokeWidth={1.9}
                    className={styles.navigationArrow}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className={styles.accountActions}>
            <Link
              href="/sign-in"
              className={styles.signInButton}
              onClick={closeMenu}
            >
              <LogIn
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              Sign in
            </Link>

            <Link
              href="/open-account"
              className={styles.openAccountButton}
              onClick={closeMenu}
            >
              <UserPlus
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              Open account
            </Link>
          </div>

          <div className={styles.securityNote}>
            <span className={styles.securityIcon}>
              <ShieldCheck
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <p>
              Your private smiles stay private unless
              you explicitly choose to share them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}