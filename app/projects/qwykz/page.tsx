import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubIcon,
} from "@/components/ui/icons";
import { featuredProjects } from "@/lib/portfolio-data";

const project = featuredProjects.find(({ slug }) => slug === "qwykz")!;

export const metadata: Metadata = {
  title: "Qwykz case study",
  description:
    "Why Marc Dagode built Qwykz, and how the CLI makes project scaffolding faster without hiding important decisions.",
};

const decisions = [
  {
    number: "01",
    title: "Make every choice inspectable",
    description:
      "A dry-run mode previews the generated tree, packages, manifest, and file changes before Qwykz writes anything. Strict mode also explains why each dependency exists.",
  },
  {
    number: "02",
    title: "Be honest about support",
    description:
      "A public capability matrix records which framework, database, authentication, cache, and Docker combinations are stable, experimental, or unsupported.",
  },
  {
    number: "03",
    title: "Design for humans and AI tools",
    description:
      "Each scaffold includes a readable project structure, a machine-friendly manifest, and an AGENTS.md guide so important context survives beyond the first command.",
  },
] as const;

export default function QwykzCaseStudyPage() {
  return (
    <main className="shell case-study">
      <Link className="case-study__back" href="/projects">
        <ArrowRightIcon />
        Back to selected work
      </Link>

      <header className="case-study__hero">
        <div className="case-study__hero-copy">
          <p className="eyebrow">{project.kicker}</p>
          <h1>{project.name}</h1>
          <p className="case-study__lede">
            A CLI that turns repetitive setup decisions into an inspectable
            scaffold—helping developers start faster without hiding how the
            foundation works.
          </p>
          <div className="case-study__actions">
            <a
              className="button"
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon />
              View repository
              <ArrowUpRightIcon />
            </a>
            <a
              className="button button--quiet"
              href="https://www.npmjs.com/package/qwykz"
              rel="noreferrer"
              target="_blank"
            >
              npm package
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <dl className="case-study__facts">
          <div>
            <dt>Role</dt>
            <dd>Creator &amp; developer</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>Open-source CLI</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status} · {project.year}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>TypeScript · Bun</dd>
          </div>
        </dl>
      </header>

      <section className="case-study__section">
        <p className="case-study__label">01 / Context</p>
        <div className="case-study__copy">
          <h2>The first hour kept disappearing.</h2>
          <p>
            Starting a project should feel like progress. Instead, the same
            setup work kept returning: creating folders, choosing packages,
            wiring authentication, configuring a database, and explaining the
            structure to an AI assistant again.
          </p>
          <p>
            Existing starters could save time, but they often replaced manual
            work with a different problem: trusting generated code without
            knowing why it was there. I built Qwykz to make the repeatable path
            both faster and clearer—especially for learners and developers
            using AI-assisted workflows.
          </p>
        </div>
      </section>

      <section className="case-study__section">
        <p className="case-study__label">02 / Approach</p>
        <div className="case-study__copy">
          <h2>From blank folder to explained foundation.</h2>
          <p>
            The CLI keeps the happy path short while leaving a useful record of
            every choice it makes.
          </p>
          <ol className="case-study__flow">
            <li>
              <span>01</span>
              <div>
                <strong>Choose</strong>
                <p>Select the stack, database target, and optional features.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Validate</strong>
                <p>Reject unsupported combinations before writing files.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Generate</strong>
                <p>Create an organized project with consistent routes.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <strong>Explain</strong>
                <p>Record packages, decisions, and AI context in the project.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="case-study__section">
        <p className="case-study__label">03 / Decisions</p>
        <div className="case-study__copy">
          <h2>Speed needed guardrails.</h2>
          <p>
            The main product decisions make automation predictable, reviewable,
            and useful after generation—not only during it.
          </p>
          <div className="case-study__decisions">
            {decisions.map((decision) => (
              <article key={decision.number}>
                <span>{decision.number}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study__section">
        <p className="case-study__label">04 / Outcome</p>
        <div className="case-study__copy">
          <h2>A personal shortcut became an open-source product.</h2>
          <p>
            Real usage raised the standard for the project. The CLI needed
            explicit capability boundaries, safer defaults, repeatable tests,
            and documentation that could keep pace with each supported stack.
          </p>
          <dl className="case-study__evidence">
            <div>
              <dt>1,763</dt>
              <dd>peak weekly npm downloads</dd>
            </div>
            <div>
              <dt>423</dt>
              <dd>GitHub clones over a 14-day snapshot</dd>
            </div>
            <div>
              <dt>131</dt>
              <dd>unique cloners in the same snapshot</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="case-study__section case-study__section--last">
        <p className="case-study__label">05 / Reflection</p>
        <div className="case-study__copy">
          <h2>A generator has to earn trust.</h2>
          <blockquote>
            A good generator does more than create files. It makes its decisions
            easy to inspect, change, and trust.
          </blockquote>
          <p>
            Qwykz taught me to treat scaffolding as a product surface rather
            than a collection of templates. The difficult part is not producing
            more code; it is keeping many combinations consistent while making
            the boundary between stable and experimental work visible.
          </p>
        </div>
      </section>

      <footer className="case-study__footer">
        <div>
          <p className="eyebrow">More projects</p>
          <h2>Explore the rest of my work.</h2>
        </div>
        <Link className="button" href="/projects">
          All projects
          <ArrowRightIcon />
        </Link>
      </footer>
    </main>
  );
}
