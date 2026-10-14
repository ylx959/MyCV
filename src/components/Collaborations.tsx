import type { Collaborations as CollaborationsData, Person } from '../cv/types.ts'
import { linkProps } from './TextLink.tsx'

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

function Avatar({ name, avatar }: Person) {
  return avatar ? (
    <img
      src={avatar}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      className="size-5 shrink-0 rounded-full pointer-events-none select-none"
    />
  ) : (
    <span
      aria-hidden="true"
      className="grid size-5 shrink-0 place-items-center rounded-full bg-zinc-800 text-[9px] font-semibold text-white"
    >
      {initials(name)}
    </span>
  )
}

/** A linked chip when `href` is given, otherwise a plain one. */
function Chip(person: Person) {
  const Tag = person.href ? 'a' : 'span'
  return (
    <Tag
      className="flex items-center gap-2 rounded-full bg-black/6 py-1 pr-3 pl-1 transition-all duration-100 hover:bg-black/10"
      {...(person.href && linkProps(person.href))}
    >
      <Avatar {...person} />
      <span className="text-sm">{person.name}</span>
    </Tag>
  )
}

export function Collaborations({ intro, people }: CollaborationsData) {
  if (people.length === 0) return null

  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Collaborations</h2>
      {intro && <p>{intro}</p>}
      <ul className="mt-5 flex flex-wrap gap-2">
        {people.map((person) => (
          <li key={person.name}>
            <Chip {...person} />
          </li>
        ))}
      </ul>
    </section>
  )
}
