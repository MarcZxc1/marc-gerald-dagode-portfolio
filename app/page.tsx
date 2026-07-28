import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { ResumeProject } from "@/components/site/resume-project";
import {
  featuredProjects,
  profile,
  scholarshipActivities,
  skillGroups,
} from "@/lib/portfolio-data";

const resumeSkills = skillGroups.slice(0, 5);

export default function Home() {
  return (
    <main className="document-stage">
      <article className="resume-sheet">
        <header className="resume-masthead">
          <div className="resume-masthead__portrait">
            <Image
              alt="Illustrated profile picture used by Marc Dagode"
              height={460}
              priority
              src="/marc-dagode-photo.png"
              width={460}
            />
          </div>

          <div className="resume-masthead__identity">
            <p className="document-kicker">Portfolio / 2026</p>
            <h1>{profile.name}</h1>
            <p>{profile.role} · Computer Science student</p>
            <span className="resume-availability">
              <span aria-hidden="true" />
              Available for opportunities
            </span>
          </div>

          <div className="resume-contact" aria-label="Contact information">
            <span>
              <MapPinIcon />
              Quezon City, PH
            </span>
            <a href={`mailto:${profile.email}`}>
              <MailIcon />
              {profile.email}
            </a>
            <a href={profile.github} rel="noreferrer" target="_blank">
              <GithubIcon />
              github.com/{profile.handle}
            </a>
            <a href={profile.linkedin} rel="noreferrer" target="_blank">
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </header>

        <section className="resume-summary">
          <p className="document-label">Profile</p>
          <div>
            <p>{profile.summary}</p>
            <span>
              Open to junior software engineering and full-stack opportunities.
            </span>
          </div>
        </section>

        <div className="resume-layout">
          <aside className="resume-sidebar">
            <section className="document-section">
              <p className="document-label">Core toolkit</p>
              <div className="resume-skills">
                {resumeSkills.map((group) => (
                  <div key={group.title}>
                    <h2>{group.title}</h2>
                    <p>{group.skills.slice(0, 5).join(", ")}</p>
                  </div>
                ))}
              </div>
              <Link className="document-more" href="/skills">
                Full toolkit
                <ArrowRightIcon />
              </Link>
            </section>

            <section className="document-section">
              <p className="document-label">Education</p>
              <div className="resume-entry">
                <span>2023 — 2027</span>
                <h2>BS Computer Science</h2>
                <p>Quezon City University</p>
                <small>Expected graduation: 2027</small>
              </div>
            </section>

            <section className="document-section">
              <p className="document-label">Leadership</p>
              <div className="resume-entry">
                <span>2024 — Present</span>
                <h2>Board of Programmers</h2>
                <p>Junior Philippine Computer Society · QCU</p>
              </div>
            </section>

            <section className="document-section">
              <p className="document-label">Activity</p>
              <div className="resume-entry">
                <span>November 2024</span>
                <h2>TON Hackers League</h2>
                <p>Manila Bootcamp · The Bug team</p>
              </div>
            </section>

            <section className="document-section document-section--last">
              <p className="document-label">Scholarship &amp; civic engagement</p>
              <div className="scholarship-list">
                {scholarshipActivities.map((item) => (
                  <div className="resume-entry" key={item.title}>
                    <span>{item.period}</span>
                    <h2>
                      <a href={item.href} rel="noreferrer" target="_blank">
                        {item.title}
                      </a>
                    </h2>
                    <p>{item.role}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="resume-main">
            <section className="document-section">
              <div className="document-section__heading">
                <div>
                  <p className="document-label">Selected work</p>
                  <h2>Projects built around real workflows.</h2>
                </div>
                <Link className="document-more" href="/projects">
                  All projects
                  <ArrowRightIcon />
                </Link>
              </div>

              <div className="resume-projects">
                {featuredProjects.slice(0, 2).map((project) => (
                  <ResumeProject key={project.slug} project={project} />
                ))}
              </div>
            </section>

            <section className="resume-proof">
              <div>
                <strong>1,763</strong>
                <span>peak weekly npm downloads</span>
              </div>
              <div>
                <strong>423</strong>
                <span>GitHub clones · 131 unique cloners</span>
              </div>
            </section>

            <section className="resume-closing">
              <div>
                <p className="document-label">Let&apos;s work together</p>
                <h2>Interested in what I can bring to your team?</h2>
              </div>
              <Link className="button button--primary" href="/contact">
                Contact me
                <ArrowRightIcon />
              </Link>
            </section>
          </div>
        </div>

        <footer className="resume-sheet__footer">
          <span>MarcZxc1 / README.md</span>
          <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
        </footer>
      </article>
    </main>
  );
}
