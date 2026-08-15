import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/site/theme-toggle";

const navigation = [
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Toolkit" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link aria-label="Marc Gerald Dagode — home" className="brand" href="/">
          <span className="brand__mark">MD</span>
          <span className="brand__label">marc.dev</span>
        </Link>

        <nav aria-label="Main navigation" className="site-nav">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            aria-label="GitHub profile (opens in a new tab)"
            className="icon-button hide-mobile"
            href="https://github.com/MarcZxc1"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
