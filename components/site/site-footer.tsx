import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-invitation">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2>Let’s build something useful.</h2>
          </div>
          <Link className="text-link" href="/contact">
            Start a conversation <ArrowUpRightIcon />
          </Link>
        </div>
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__name">{profile.name}</p>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div className="site-footer__links">
            <a href={profile.github} rel="noreferrer" target="_blank">
              GitHub <ArrowUpRightIcon />
            </a>
            <a href={profile.linkedin} rel="noreferrer" target="_blank">
              LinkedIn <ArrowUpRightIcon />
            </a>
            <a href="/marc-dagode-resume.pdf" rel="noreferrer" target="_blank">
              Résumé <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
