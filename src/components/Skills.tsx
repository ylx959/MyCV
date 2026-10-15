import type { SkillGroup } from '../cv/types.ts'

/** Skills as labelled rows of chips. Omitted when empty. */
export function Skills({ groups = [] }: { groups?: SkillGroup[] }) {
  const filled = groups.filter((g) => g.items.length > 0)
  if (filled.length === 0) return null

  return (
    <section className="mb-20">
      <h2 className="mb-6 text-lg font-semibold">Skills</h2>
      <dl className="space-y-4">
        {filled.map((group) => (
          <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <dt className="mt-1 shrink-0 text-sm text-tertiary sm:w-28">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default select-none rounded-md border border-ink/25 px-3 py-[2.5px] text-[calc(var(--text-sm)*0.95)]/5 text-ink transition-[background-color,scale] duration-150 ease-out hover:bg-ink/8 active:scale-95"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
