import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { ProjectCard } from "@/components/site/project-card";
import { LinkButton } from "@/components/ui/link-button";
import { GithubIcon } from "@/components/ui/icons";
import { featuredProjects, profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software projects by Marc Gerald Dagode.",
};

export default function ProjectsPage() {
  return (
    <main className="shell page">
      <PageIntro
        action={
          <LinkButton href={profile.github} target="_blank">
            <GithubIcon />
            GitHub profile
          </LinkButton>
        }
        description="A focused selection of developer tools and full-stack products. Each project starts with a concrete workflow and is shaped around reliability, security, and maintainability."
        eyebrow="Selected work"
        title="Things I’ve built."
      />
      <div className="project-grid project-grid--all">
        {featuredProjects.map((project) => (
          <ProjectCard detailed key={project.slug} project={project} />
        ))}
      </div>
      <p className="page-note">
        More experiments and coursework live on{" "}
        <a href={profile.github} rel="noreferrer" target="_blank">
          GitHub
        </a>
        . This page stays intentionally selective.
      </p>
    </main>
  );
}
