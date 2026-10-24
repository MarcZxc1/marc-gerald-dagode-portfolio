import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { featuredProjects } from "@/lib/portfolio-data";

type ProjectBriefProps = {
  slug: "supply-chain" | "nutrimap";
  role: string;
  context: string;
  contextTitle?: string;
  contribution: string;
  decisions: readonly { title: string; description: string }[];
  status: string;
};

export function ProjectBrief({
  slug,
  role,
  context,
  contextTitle = "The problem behind the project.",
  contribution,
  decisions,
  status,
}: ProjectBriefProps) {
  const project = featuredProjects.find((item) => item.slug === slug)!;
  return (
    <main className="shell case-study">
      <Link className="case-study__back" href="/projects">
        <ArrowRightIcon />
        Back to selected work
      </Link>
      <header className="case-study__hero">
        <div>
          <p className="eyebrow">{project.kicker}</p>
          <h1>{project.name}</h1>
          <p className="case-study__lede">{project.summary}</p>
        </div>
        <dl className="case-study__facts">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(" · ")}</dd>
          </div>
        </dl>
      </header>
      <section className="case-study__section">
        <p className="case-study__label">01 / Context</p>
        <div className="case-study__copy">
          <h2>{contextTitle}</h2>
          <p>{context}</p>
        </div>
      </section>
      <section className="case-study__section">
        <p className="case-study__label">02 / My role</p>
        <div className="case-study__copy">
          <h2>Where I contribute.</h2>
          <p>{contribution}</p>
          <div className="case-study__decisions">
            {decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="case-study__section case-study__section--last">
        <p className="case-study__label">03 / Status</p>
        <div className="case-study__copy">
          <h2>Work in progress.</h2>
          <p>{status}</p>
        </div>
      </section>
      <footer className="case-study__footer">
        <div>
          <p className="eyebrow">More projects</p>
          <h2>Explore the rest of my work.</h2>
        </div>
        <Link className="button" href="/projects">
          All projects <ArrowRightIcon />
        </Link>
      </footer>
    </main>
  );
}
