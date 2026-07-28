import { ArrowUpRightIcon } from "@/components/ui/icons";
import { featuredProjects } from "@/lib/portfolio-data";

type Project = (typeof featuredProjects)[number];

type ProjectCardProps = {
  project: Project;
  detailed?: boolean;
};

export function ProjectCard({ detailed = false, project }: ProjectCardProps) {
  return (
    <article className="project-card" data-slot="project-card">
      <div className="project-card__topline">
        <span className="project-card__status">
          <span aria-hidden="true" />
          {project.status}
        </span>
        <span>{project.year}</span>
      </div>
      <p className="project-card__kicker">{project.kicker}</p>
      <h3>
        <a href={project.href} rel="noreferrer" target="_blank">
          {project.name}
          <ArrowUpRightIcon />
        </a>
      </h3>
      <p className="project-card__summary">{project.summary}</p>
      {detailed ? (
        <ul className="project-card__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      <ul aria-label={`${project.name} technologies`} className="tag-list">
        {project.stack.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
