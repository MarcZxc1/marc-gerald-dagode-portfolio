import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ExpertiseSection() {
  return (
    <section
      aria-labelledby="background-title"
      className="shell home-section home-background"
    >
      <div>
        <p className="eyebrow">02 / A little background</p>
        <h2 id="background-title">Curious about the whole system.</h2>
        <Link className="text-link" href="/about">
          More about me <ArrowRightIcon />
        </Link>
      </div>
      <div className="home-background__copy">
        <p>
          I like understanding how the pieces fit: what someone needs from an
          interface, how the data moves, and what it takes to keep the
          application running.
        </p>
        <p>
          I use an Obsidian second brain to connect decisions, debugging
          history, and reusable lessons. That context guides my AI-assisted
          workflow: scope the task, build, verify, and record what I learn.
        </p>
        <Link className="text-link" href="/about#how-i-work">
          My second brain &amp; AI workflow <ArrowRightIcon />
        </Link>
        <div className="toolkit-line">
          <span>Often working with</span>
          <p>TypeScript, React, Python &amp; PostgreSQL</p>
          <Link className="text-link" href="/skills">
            Explore my toolkit <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
