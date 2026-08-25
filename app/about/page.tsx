import Image from "next/image";
import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { Timeline } from "@/components/site/timeline";
import { ArrowUpRightIcon, MapPinIcon } from "@/components/ui/icons";
import { profile, resumeTimeline } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, and leadership experience of Marc Gerald Dagode.",
};

export default function AboutPage() {
  return (
    <main className="shell page">
      <PageIntro
        description="A Computer Science student who enjoys turning ambiguous requirements into clean interfaces, dependable services, and repeatable delivery workflows."
        eyebrow="About"
        title="Engineer in progress."
      />

      <section className="about-profile">
        <Image
          alt="Illustrated profile picture used by Marc Gerald Dagode"
          className="about-profile__image"
          height={460}
          src="/marc-dagode-photo.png"
          width={460}
        />
        <div className="about-profile__copy">
          <p>
            I&apos;m Marc, a full-stack developer based in Quezon City. I work
            primarily with TypeScript, React, Bun, Python, and PostgreSQL,
            moving comfortably between product interfaces, backend services,
            data layers, and delivery automation.
          </p>
          <p>
            I care about software that earns trust: predictable behavior,
            thoughtful validation, understandable architecture, and details
            that make a product easier to use.
          </p>
          <span className="location-line">
            <MapPinIcon />
            {profile.location}
          </span>
        </div>
      </section>

      <section className="resume-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Resume</p>
            <h2>Education & leadership.</h2>
          </div>
          <span className="file-label">timeline.md</span>
        </div>
        <Timeline items={resumeTimeline} />
      </section>

      <section className="about-links">
        <a href={profile.github} rel="noreferrer" target="_blank">
          GitHub
          <ArrowUpRightIcon />
        </a>
        <a href={profile.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
          <ArrowUpRightIcon />
        </a>
        <a href="/marc-dagode-resume.pdf" rel="noreferrer" target="_blank">
          Resume
          <ArrowUpRightIcon />
        </a>
      </section>
    </main>
  );
}
