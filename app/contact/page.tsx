import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { PageIntro } from "@/components/site/page-intro";
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Marc Dagode.",
};

export default function ContactPage() {
  return (
    <main className="shell page">
      <PageIntro
        description="Have a role, project, or useful problem in mind? Send a short note. I read every message and will reply as soon as I can."
        eyebrow="Contact"
        title="Let’s talk."
      />

      <div className="contact-layout">
        <aside className="contact-aside">
          <div>
            <p className="eyebrow">Direct</p>
            <a className="contact-direct-link" href={`mailto:${profile.email}`}>
              <MailIcon />
              <span>{profile.email}</span>
              <ArrowUpRightIcon />
            </a>
          </div>
          <div className="contact-location">
            <MapPinIcon />
            <p>
              Based in {profile.location}
              <span>Available for remote and Metro Manila opportunities.</span>
            </p>
          </div>
          <p className="contact-aside__note">
            The form sends through a small server route. If it is not configured
            yet, the direct email link always works.
          </p>
        </aside>
        <ContactForm />
      </div>
    </main>
  );
}
