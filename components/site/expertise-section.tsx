import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { GitHubContributions } from "@/components/site/github-contributions";
import { profile, skillGroups } from "@/lib/portfolio-data";

export function ExpertiseSection() {
  return (
    <section className="shell py-24 border-t border-[var(--border)] animate-fade-in-up animation-delay-300">
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
                     <span 
                       key={skill} 
                       className="px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)] text-xs font-mono transition-colors duration-[var(--duration-fast)] ease-[var(--ease-default)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] hover:border-[var(--foreground-subtle)] cursor-default"
                     >
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
  );
}
