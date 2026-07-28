import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export function PageIntro({ action, description, eyebrow, title }: PageIntroProps) {
  return (
    <div className="page-intro" data-slot="page-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro__description">{description}</p>
      </div>
      {action ? <div className="page-intro__action">{action}</div> : null}
    </div>
  );
}
