import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marczxc1.dev"),
  title: {
    default: "Marc Gerald Dagode — Full-stack Developer",
    template: "%s · Marc Gerald Dagode",
  },
  description:
    "Portfolio of Marc Gerald Dagode, a full-stack developer building reliable web applications and developer tools.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Marc Gerald Dagode — Full-stack Developer",
    description:
      "Reliable web applications and developer tools, built with a product mindset.",
    type: "website",
    images: [
      {
        url: "/marc-dagode-photo.png",
        width: 1254,
        height: 1254,
        alt: "Marc Gerald Dagode",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Marc Gerald Dagode — Full-stack Developer",
    description:
      "Reliable software, developer tooling, and thoughtful use of AI.",
    images: ["/marc-dagode-photo.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fa" },
  ],
};

const themeScript = `
  try {
    const saved = localStorage.getItem("portfolio-theme");
    const theme = saved === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html data-theme="dark" lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
