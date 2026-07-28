import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import {
  ArrowUpRightIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { profile } from "@/lib/portfolio-data";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Marc Dagode.",
};

export default function ContactPage() {
  return (
    <main className="shell page">
      <PageIntro
        description="Have a role, project, or useful problem in mind? Email me directly and tell me a little about it."
        eyebrow="Contact"
        title="Let’s talk."
      />

      <section className={styles.contactPanel}>
        <div className={styles.contactCopy}>
          <p className="eyebrow">Direct contact</p>
          <h2>Email is the best way to reach me.</h2>
          <p>
            Whether it is an opportunity, a collaboration, or a useful problem
            to solve, a short introduction is enough to start.
          </p>
          <div className={styles.contactActions}>
            <a
              className="button button--primary"
              href={`mailto:${profile.email}`}
            >
              <MailIcon />
              Email me
              <ArrowUpRightIcon />
            </a>
            <a
              className="button"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinIcon />
              LinkedIn
              <ArrowUpRightIcon />
            </a>
          </div>
          <a className={styles.emailAddress} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <dl className={styles.contactDetails}>
          <div>
            <dt>
              <MapPinIcon />
              Location
            </dt>
            <dd>{profile.location}</dd>
            <dd>Open to remote and Metro Manila opportunities.</dd>
          </div>
          <div>
            <dt>
              <MailIcon />
              Response
            </dt>
            <dd>I usually reply within one to two days.</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
