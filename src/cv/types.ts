/** The CV data shape. Terms are defined in CONTEXT.md. */

export type Icon = 'arrow' | 'note' | 'image'

export type Link = {
  label: string
  href: string
  /** Trailing icon. Defaults to `arrow` (↗). */
  icon?: Icon
}

/** Plain text, or text mixed with inline links. */
export type RichText = string | (string | Link)[]

export type Profile = {
  name: string
  title: string
  nav?: Link[]
}

export type Period = {
  /** Year, e.g. `2024`. */
  start: string
  /** Omitted → single year. `null` → ongoing ("Present"). */
  end?: string | null
}

export type Experience = Period & {
  company: string
  summary?: RichText
  highlights?: RichText[]
}

export type Education = Period & {
  school: string
  /** Degree and field, e.g. `B.S. Computer Science`. */
  degree?: string
  highlights?: RichText[]
}

export type Person = {
  name: string
  href?: string
  /** Image URL. Omitted → initials. */
  avatar?: string
}

export type Collaborations = {
  intro?: string
  people: Person[]
}

export type Cv = {
  profile: Profile
  experience?: Experience[]
  education?: Education[]
  collaborations?: Collaborations
  connect?: Link[]
}
