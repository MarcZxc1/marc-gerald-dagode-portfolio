"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  contributions?: ContributionDay[];
};

type GitHubContributionsProps = {
  profileUrl: string;
  username: string;
};

const contributionFormatter = new Intl.NumberFormat("en-US");
const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});

function parseDate(date: string) {
  return new Date(`${date}T00:00:00Z`);
}

function isContributionDay(value: unknown): value is ContributionDay {
  if (!value || typeof value !== "object") {
    return false;
  }

  const day = value as Partial<ContributionDay>;

  return (
    typeof day.date === "string" &&
    typeof day.count === "number" &&
    typeof day.level === "number"
  );
}

function createCalendarWeeks(contributions: ContributionDay[]) {
  if (contributions.length === 0) {
    return [];
  }

  const sorted = [...contributions].sort((left, right) =>
    left.date.localeCompare(right.date),
  );
  const cells: Array<ContributionDay | null> = [
    ...Array.from({ length: parseDate(sorted[0].date).getUTCDay() }, () => null),
    ...sorted,
  ];

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return Array.from({ length: cells.length / 7 }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
}

export function GitHubContributions({
  profileUrl,
  username,
}: GitHubContributionsProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Contribution request failed.");
        }

        const data = (await response.json()) as ContributionResponse;
        const days = Array.isArray(data.contributions)
          ? data.contributions.filter(isContributionDay)
          : [];

        if (days.length === 0) {
          throw new Error("No contribution data was returned.");
        }

        setContributions(days);
        setStatus("ready");
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setStatus("error");
        }
      }
    }

    void loadContributions();

    return () => controller.abort();
  }, [username]);

  const weeks = useMemo(
    () => createCalendarWeeks(contributions),
    [contributions],
  );
  const total = useMemo(
    () => contributions.reduce((sum, day) => sum + day.count, 0),
    [contributions],
  );
  const monthLabels = useMemo(() => {
    let previousMonth = -1;

    return weeks.flatMap((week, index) => {
      const firstDay = week.find(isContributionDay);

      if (!firstDay) {
        return [];
      }

      const date = parseDate(firstDay.date);
      const month = date.getUTCMonth();

      if (month === previousMonth) {
        return [];
      }

      previousMonth = month;

      return [{ column: index + 1, label: monthFormatter.format(date) }];
    });
  }, [weeks]);

  return (
    <section
      aria-labelledby="github-contributions-title"
      className="github-contributions"
    >
      <div className="github-contributions__heading">
        <div>
          <p className="document-label">GitHub activity</p>
          <h2 id="github-contributions-title">
            {status === "ready"
              ? `${contributionFormatter.format(total)} contributions in the last year`
              : "Contribution history"}
          </h2>
        </div>
        <a
          className="document-more"
          href={profileUrl}
          rel="noreferrer"
          target="_blank"
        >
          Full activity
          <ArrowRightIcon />
        </a>
      </div>

      {status === "ready" ? (
        <div className="contribution-calendar">
          <div className="contribution-calendar__scroll">
            <div className="contribution-calendar__inner">
              <div
                aria-hidden="true"
                className="contribution-calendar__months"
                style={{
                  gridTemplateColumns: `repeat(${weeks.length}, var(--contribution-size))`,
                }}
              >
                {monthLabels.map((month) => (
                  <span
                    key={`${month.column}-${month.label}`}
                    style={{ gridColumnStart: month.column }}
                  >
                    {month.label}
                  </span>
                ))}
              </div>

              <div className="contribution-calendar__body">
                <div
                  aria-hidden="true"
                  className="contribution-calendar__weekdays"
                >
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div
                  aria-label={`${contributionFormatter.format(total)} GitHub contributions in the last year`}
                  className="contribution-calendar__grid"
                  role="img"
                  style={{
                    gridTemplateColumns: `repeat(${weeks.length}, var(--contribution-size))`,
                  }}
                >
                  {weeks.flatMap((week, weekIndex) =>
                    week.map((day, dayIndex) =>
                      day ? (
                        <span
                          aria-label={`${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${day.date}`}
                          className="contribution-calendar__day"
                          data-level={Math.min(Math.max(day.level, 0), 4)}
                          key={day.date}
                          title={`${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${day.date}`}
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="contribution-calendar__day contribution-calendar__day--empty"
                          key={`empty-${weekIndex}-${dayIndex}`}
                        />
                      ),
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="contribution-calendar__footer">
            <span>Daily activity</span>
            <div aria-label="Contribution intensity from less to more">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <i aria-hidden="true" data-level={level} key={level} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="contribution-calendar contribution-calendar--status">
          {status === "loading"
            ? "Loading recent GitHub activity…"
            : "The contribution graph is temporarily unavailable. View the full history on GitHub."}
        </div>
      )}
    </section>
  );
}
