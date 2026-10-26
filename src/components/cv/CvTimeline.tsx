import type { TimelineEntry } from '../../data/cv';
import { Badge } from '../ui/badge';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
} from '../ui/timeline';

export function CvTimeline({ entries }: { entries: TimelineEntry[] }) {
  const publishedEntries = entries.filter((entry) => !entry.draft);
  if (publishedEntries.length === 0) return null;

  return (
    <Timeline className="min-[56rem]:w-full">
      {publishedEntries.map((entry, index) => {
        const isLeft = index % 2 === 0;

        return (
          <TimelineItem
            key={`${entry.period}-${entry.organization}-${entry.title}`}
            className="min-[56rem]:grid-cols-[minmax(0,1fr)_var(--space-8)_minmax(0,1fr)] min-[56rem]:gap-x-[var(--space-6)] min-[56rem]:pb-[var(--space-9)]"
          >
            <TimelineConnector className="min-[56rem]:left-1/2 min-[56rem]:-translate-x-1/2" />
            <TimelineIcon className="min-[56rem]:col-start-2" />
            <TimelineContent
              className={
                isLeft
                  ? 'min-[56rem]:col-start-1 min-[56rem]:rounded-[var(--radius-ui-sm)] min-[56rem]:bg-[var(--color-surface)] min-[56rem]:p-[var(--space-4)]'
                  : 'min-[56rem]:col-start-3 min-[56rem]:rounded-[var(--radius-ui-sm)] min-[56rem]:bg-[var(--color-surface)] min-[56rem]:p-[var(--space-4)]'
              }
            >
              <TimelineHeader>
                <Badge variant="outline">{entry.period}</Badge>
                <TimelineTitle>{entry.title}</TimelineTitle>
              </TimelineHeader>
              <p className="m-0 text-[length:var(--font-size-nav)]">
                {entry.organization}
                {entry.location && (
                  <span className="text-muted-foreground"> · {entry.location}</span>
                )}
              </p>
              {entry.description && <TimelineDescription>{entry.description}</TimelineDescription>}
              {Boolean(entry.highlights?.length) && (
                <ul className="m-0 flex list-disc flex-col gap-[var(--space-2)] pl-[var(--space-5)] text-muted-foreground">
                  {entry.highlights?.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
