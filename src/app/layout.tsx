import type {
  Metadata,
  Viewport,
} from "next";

import type { ReactNode } from "react";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import { Toaster } from "sonner";

import PagePreloader from "@/components/animations/preloader/PagePreloader";

import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import MobileBottomNav from "@/components/layout/MobileBottomNav/MobileBottomNav";

import Providers from "@/providers/Providers";

import styles from "@/components/animations/css/layout/RootLayout.module.css";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Smile Bank",
    template: "%s | Smile Bank",
  },

  description:
    "Deposit today's smile, preserve meaningful family memories, and control exactly what stays private or becomes public.",

  applicationName: "Smile Bank",

  keywords: [
    "Smile Bank",
    "Smile Vault",
    "Family Memories",
    "Private Photo Vault",
    "Smile Capture",
    "AI Best Smile",
    "Smile of the World",
  ],

  authors: [
    {
      name: "Smile Bank",
    },
  ],

  creator: "Smile Bank",
  publisher: "Smile Bank",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0F786F",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={styles.rootBody}>
        <Providers>
          <PagePreloader />

          <div className={styles.appShell}>
            <Header />

            <main className={styles.mainContent}>
              {children}
            </main>

            <Footer />
          </div>

          <MobileBottomNav />

          <Toaster
            position="top-center"
            richColors
            closeButton
            duration={3500}
            visibleToasts={3}
            gap={8}
            offset={16}
            mobileOffset={12}
            toastOptions={{
              className: styles.toast,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}