import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { qwykzDownloadEvidence } from "@/lib/project-evidence";
import { featuredProjects } from "@/lib/portfolio-data";

export function SelectedWorkSection() {
  return (
    <section
      aria-labelledby="selected-work-title"
      className="shell home-section"
      id="selected-work"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="selected-work-title">Tools, products &amp; a thesis.</h2>
        </div>
        <Link className="text-link" href="/projects">
          All projects <ArrowRightIcon />
        </Link>
      </div>
      <div className="work-list">
        {featuredProjects.slice(0, 3).map((project, index) => (
          <article className="work-item" key={project.slug}>
            <span aria-hidden="true" className="work-item__number">
              0{index + 1}
            </span>
            <div className="work-item__identity">
              <p className="work-item__category">{project.kicker}</p>
              <h3>
                <Link href={project.caseStudyHref!}>
                  {project.name}
                  <ArrowUpRightIcon />
                </Link>
              </h3>
              <p className="work-item__status">
                {project.status} <span aria-hidden="true">·</span>{" "}
                {project.year}
              </p>
            </div>
            <div className="work-item__detail">
              <p>{project.summary}</p>
              {project.slug === "qwykz" ? (
                <p className="work-item__evidence">
                  {qwykzDownloadEvidence.peakDownloads.toLocaleString("en-US")}{" "}
                  npm downloads · Jun 20–26, 2026
                </p>
              ) : null}
              <div className="work-item__bottom">
                <span className="stack-line">
                  {project.stack.slice(0, 3).join(" / ")}
                </span>
                <Link className="text-link" href={project.caseStudyHref!}>
                  Project notes <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
