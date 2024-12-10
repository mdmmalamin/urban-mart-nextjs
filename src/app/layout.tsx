import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";
import { Providers } from "../lib/Providers";
import Navbar from "../components/ui/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
