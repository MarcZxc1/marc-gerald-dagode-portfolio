import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ProjectCard } from "@/components/site/project-card";
import { featuredProjects } from "@/lib/portfolio-data";

export function SelectedWorkSection() {
  return (
    <section className="shell py-24 border-t border-[var(--border)] animate-fade-in-up animation-delay-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-3">Selected Work</p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Projects built around real workflows.</h3>
        </div>
        <Link href="/projects" className="text-link">
          All projects
          <ArrowRightIcon />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.slice(0, 4).map((project) => (
          <ProjectCard key={project.slug} project={project} detailed />
        ))}
      </div>
    </section>
  );
}
