import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { GitHubContributions } from "@/components/site/github-contributions";
import { ProjectCard } from "@/components/site/project-card";
import {
  featuredProjects,
  profile,
  scholarshipActivities,
  skillGroups,
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="shell pt-[120px] pb-24 md:pt-48 md:pb-[120px]">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-[18px] mb-[30px]">
            <Image
              alt={`Profile picture of ${profile.name}`}
              src="/marc-dagode-photo.png"
              width={64}
              height={64}
              priority
              className="rounded-full border border-[var(--border)] shadow-sm bg-[var(--surface)]"
            />
            <div>
              <h1 className="text-xl font-semibold text-[var(--foreground)]">{profile.name}</h1>
              <p className="text-[var(--foreground-muted)]">{profile.role}</p>
            </div>
            <div className="ms-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--foreground-muted)] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] shadow-[0_0_0_3px_var(--success-wash)]"></span>
              Available for opportunities
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05] mb-[30px]">
            Full-stack developer focused on building simpler ways to solve problems.
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl leading-relaxed mb-[42px]">
            {profile.summary}
          </p>
          
          <div className="flex flex-wrap items-center gap-[18px]">
            <Link href="/contact" className="button button--primary">
              Let&apos;s work together
              <ArrowRightIcon />
            </Link>
            <div className="flex items-center gap-1.5 ms-[6px]">
               <a href={profile.github} rel="noreferrer" target="_blank" className="icon-button" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} rel="noreferrer" target="_blank" className="icon-button" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="shell py-24 border-t border-[var(--border)]">
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

      {/* Toolkit & Metrics */}
      <section className="shell py-24 border-t border-[var(--border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="eyebrow mb-3">Expertise</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-[30px]">Core toolkit & skills.</h3>
            
            <div className="space-y-[42px]">
              {skillGroups.slice(0, 3).map((group) => (
                <div key={group.title}>
                  <h4 className="text-lg font-semibold mb-1.5">{group.title}</h4>
                  <p className="text-[var(--foreground-muted)] mb-[18px]">{group.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map(skill => (
                       <span key={skill} className="px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)] text-xs font-mono">
                         {skill}
                       </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/skills" className="text-link mt-[30px]">
              Full toolkit
              <ArrowRightIcon />
            </Link>
          </div>
          
          <div className="lg:col-span-1 hidden xl:block"></div>
          
          <div className="lg:col-span-6 space-y-12">
             <div>
                <p className="eyebrow mb-3">Metrics</p>
                <div className="grid grid-cols-2 gap-[18px]">
                  <div className="card p-6">
                    <strong className="block text-3xl font-mono mb-1.5 text-[var(--foreground)]">1,763</strong>
                    <span className="text-sm text-[var(--foreground-muted)]">peak weekly npm downloads</span>
                  </div>
                  <div className="card p-6">
                    <strong className="block text-3xl font-mono mb-1.5 text-[var(--foreground)]">423</strong>
                    <span className="text-sm text-[var(--foreground-muted)]">GitHub clones · 131 unique</span>
                  </div>
                </div>
             </div>
             
             <div>
                <p className="eyebrow mb-3">Open Source Activity</p>
                <GitHubContributions
                  profileUrl={profile.github}
                  username={profile.handle}
                />
             </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
