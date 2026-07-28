import { ArrowUpRightIcon } from "@/components/ui/icons";
import { featuredProjects } from "@/lib/portfolio-data";

type Project = (typeof featuredProjects)[number];

type ProjectRowProps = {
  project: Project;
};

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="project-row" data-slot="project-row">
      <div className="project-row__index" aria-hidden="true">
        {project.name.slice(0, 2).toUpperCase()}
      </div>
      <div className="project-row__body">
        <div className="project-row__heading">
          <h3>{project.name}</h3>
          <span>{project.status}</span>
        </div>
        <p>{project.summary}</p>
        <div className="project-row__stack">
          {project.stack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <a
        aria-label={`Open ${project.name} on GitHub`}
        className="project-row__link"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        <ArrowUpRightIcon />
      </a>
    </article>
  );
}
