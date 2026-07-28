import { cn } from "@/components/ui/utils";

type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  type?: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
  compact?: boolean;
  className?: string;
};

export function Timeline({ className, compact = false, items }: TimelineProps) {
  return (
    <ol
      className={cn("timeline", compact && "timeline--compact", className)}
      data-slot="timeline"
    >
      {items.map((item) => (
        <li className="timeline__item" key={`${item.period}-${item.title}`}>
          <span aria-hidden="true" className="timeline__dot" />
          <div className="timeline__meta">
            <time>{item.period}</time>
            {item.type ? <span>{item.type}</span> : null}
          </div>
          <h3>{item.title}</h3>
          <p className="timeline__organization">{item.organization}</p>
          <p className="timeline__description">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
