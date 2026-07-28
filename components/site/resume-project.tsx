import { ArrowUpRightIcon } from "@/components/ui/icons";
import { featuredProjects } from "@/lib/portfolio-data";

type Project = (typeof featuredProjects)[number];

type ResumeProjectProps = {
  project: Project;
};

export function ResumeProject({ project }: ResumeProjectProps) {
  return (
    <article className="resume-project" data-slot="resume-project">
      <span aria-hidden="true" className="resume-project__dot" />
      <div className="resume-project__topline">
        <div>
          <p>{project.kicker}</p>
          <h3>
            <a href={project.href} rel="noreferrer" target="_blank">
              {project.name}
              <ArrowUpRightIcon />
            </a>
          </h3>
        </div>
        <span>{project.year}</span>
      </div>
      <p className="resume-project__summary">{project.summary}</p>
      <ul className="resume-project__highlights">
        {project.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <p className="resume-project__stack">
        {project.stack.slice(0, 4).join(" / ")}
      </p>
    </article>
  );
}
