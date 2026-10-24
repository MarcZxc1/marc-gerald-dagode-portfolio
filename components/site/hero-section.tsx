import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="shell home-hero">
      <div className="home-hero__intro">
        <p className="eyebrow">Full-stack developer</p>
        <h1 id="hero-title">
          Marc Gerald
          <br />
          Dagode<span className="accent">.</span>
        </h1>
        <p className="home-hero__description">{profile.summary}</p>
        <div className="hero-actions">
          <Link className="button button--primary" href="#selected-work">
            Explore my work <ArrowRightIcon />
          </Link>
          <Link className="text-link" href="/contact">
            Get in touch <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
      <figure className="hero-portrait">
        <Image
          alt={profile.name}
          src="/marc-dagode-photo.png"
          width={560}
          height={560}
          priority
          sizes="(max-width: 640px) 140px, (max-width: 900px) 230px, 300px"
        />
        <figcaption>
          <span aria-hidden="true" />
          Open to opportunities
        </figcaption>
      </figure>
      <div className="home-hero__footnote">
        <span>Quezon City, Philippines · UTC+8</span>
        <a href="/marc-dagode-resume.pdf" rel="noreferrer" target="_blank">
          View résumé <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}
