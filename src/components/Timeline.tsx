import type { Period as PeriodData, RichText as RichTextValue } from '../cv/types.ts'
import { RichText } from './TextLink.tsx'

/** One row of a timeline section: a heading, its period, and optional detail. */
export type Entry = PeriodData & {
  title: string
  summary?: RichTextValue
  highlights?: RichTextValue[]
}

function Period({ start, end }: PeriodData) {
  return (
    <p className="mt-px text-sm text-tertiary">
      <time dateTime={start}>{start}</time>
      {end !== undefined && <> – {end === null ? 'Present' : <time dateTime={end}>{end}</time>}</>}
    </p>
  )
}

/** A titled list of dated entries (Experience, Education). Omitted when empty. */
export function Timeline({ heading, entries = [] }: { heading: string; entries?: Entry[] }) {
  if (entries.length === 0) return null

  return (
    <section>
      <h2 className="mb-6 text-lg font-semibold">{heading}</h2>
      <ul>
        {entries.map((item, i) => (
          <li key={item.title + item.start} className={`mb-10 pb-10 ${i < entries.length - 1 ? 'border-b border-black/10' : ''}`}>
            <article>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{item.title}</h3>
                <Period {...item} />
              </div>
              {item.summary && (
                <p className="mt-2">
                  <RichText value={item.summary} />
                </p>
              )}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-6 list-disc space-y-1.5 pl-6 text-secondary marker:text-zinc-400">
                  {item.highlights.map((h, j) => (
                    <li key={j}>
                      <RichText value={h} />
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
