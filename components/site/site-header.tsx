"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/site/theme-toggle";

const navigation = [
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Toolkit" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link aria-label="Marc Gerald Dagode — home" className="brand" href="/">
          md<span className="accent">.</span>
        </Link>
        <nav aria-label="Main navigation" className="site-nav">
          {navigation.map((item) => (
            <Link
              aria-current={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
