import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from "@/components/ui/icons";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="shell pt-[120px] pb-24 md:pt-48 md:pb-[120px]">
      <div className="max-w-4xl">
        <div className="flex flex-wrap items-center gap-[18px] mb-[30px] animate-fade-in-up">
          <Image
            alt={`Profile picture of ${profile.name}`}
            src="/marc-dagode-photo.png"
            width={64}
            height={64}
            priority
            className="rounded-full border border-[var(--border)] shadow-sm bg-[var(--surface)]"
          />
          <div>
            <h1 className="text-xl font-semibold text-[var(--foreground)]">{profile.name}</h1>
            <p className="text-[var(--foreground-muted)]">{profile.role}</p>
          </div>
          <div className="ms-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--foreground-muted)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] shadow-[0_0_0_3px_var(--success-wash)] animate-status-pulse"></span>
            Available for opportunities
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05] mb-[30px] animate-fade-in-up animation-delay-100">
          Full-stack developer focused on building simpler ways to solve problems.
        </h2>
        
        <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl leading-relaxed mb-[42px] animate-fade-in-up animation-delay-200">
          {profile.summary}
        </p>
        
        <div className="flex flex-wrap items-center gap-[18px] animate-fade-in-up animation-delay-300">
          <Link href="/contact" className="button button--primary">
            Let&apos;s work together
            <ArrowRightIcon />
          </Link>
          <div className="flex items-center gap-1.5 ms-[6px]">
             <a href={profile.github} rel="noreferrer" target="_blank" className="icon-button" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} rel="noreferrer" target="_blank" className="icon-button" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
