import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { GitHubContributions } from "@/components/site/github-contributions";
import { Timeline } from "@/components/site/timeline";
import { ArrowUpRightIcon, MapPinIcon } from "@/components/ui/icons";
import { profile, resumeTimeline, workingMethods } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, education, and leadership experience of Marc Gerald Dagode.",
};

export default function AboutPage() {
  return (
    <main className="shell page">
      <PageIntro
        description="A full-stack developer and Computer Science student based in Quezon City, Philippines."
        eyebrow="About"
        title="A little about me."
      />

      <section className="about-profile">
        <Image
          alt="Marc Gerald Dagode"
          className="about-profile__image"
          height={460}
          sizes="(max-width: 640px) 180px, (max-width: 900px) 200px, 240px"
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
            At Microgenesis, I help replace legacy SharePoint lists with a
            unified Supply Chain Portal, from operational interfaces to API
            security and release coordination. I also lead architecture and
            DevOps for Nutrimap, our university thesis on digital nutrition
            surveillance.
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
            <h2>Experience & education.</h2>
          </div>
        </div>
        <Timeline items={resumeTimeline} />
      </section>

      <section
        aria-labelledby="working-methods-title"
        className="working-methods"
        id="how-i-work"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="working-methods-title">
              A second brain behind the software.
            </h2>
          </div>
        </div>
        <p className="working-methods__intro">
          My workflow connects knowledge management, AI-assisted development,
          and engineering checks. The vault holds the context; the code and
          verification results show what actually works.
        </p>
        <dl className="method-list">
          {workingMethods.map((method) => (
            <div key={method.title}>
              <dt>{method.title}</dt>
              <dd>{method.description}</dd>
            </div>
          ))}
        </dl>
        <Link
          className="text-link"
          href="/projects/supply-chain#engineering-case"
        >
          Read the stock-consistency case <ArrowUpRightIcon />
        </Link>
      </section>

      <div className="about-activity">
        <GitHubContributions
          profileUrl={profile.github}
          username={profile.handle}
        />
      </div>

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
