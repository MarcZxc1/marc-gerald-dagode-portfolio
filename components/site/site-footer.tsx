import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "@/components/ui/icons";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <p className="site-footer__name">Marc Gerald Dagode</p>
          <p className="muted">Built with Next.js, TypeScript, and a little restraint.</p>
        </div>
        <div className="site-footer__links">
          <a aria-label="GitHub" href={profile.github} rel="noreferrer" target="_blank">
            <GithubIcon />
          </a>
          <a aria-label="LinkedIn" href={profile.linkedin} rel="noreferrer" target="_blank">
            <LinkedinIcon />
          </a>
          <Link aria-label="Send an email" href="/contact">
            <MailIcon />
          </Link>
          <a aria-label="Resume" href="/marc-dagode-resume.pdf" rel="noreferrer" target="_blank">
            <DownloadIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
