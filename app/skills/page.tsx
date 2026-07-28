import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { skillGroups } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Toolkit",
  description: "Technologies and engineering practices Marc Dagode works with.",
};

export default function SkillsPage() {
  return (
    <main className="shell page">
      <PageIntro
        description="The tools change. The goal stays the same: readable code, dependable systems, and a short path from an idea to something useful."
        eyebrow="Toolkit"
        title="How I build."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <section className="skill-group" key={group.title}>
            <span className="skill-group__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
              <ul className="tag-list tag-list--large">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="principles">
        <p className="eyebrow">Working principles</p>
        <div className="principles__grid">
          <article>
            <span>01</span>
            <h3>Make it understandable</h3>
            <p>Good abstractions should remove confusion, not relocate it.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Secure the boundaries</h3>
            <p>Validate input, minimize access, and make failures visible.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Ship with feedback</h3>
            <p>Tests, automation, and observability keep delivery honest.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
