import type { Profile as ProfileData } from '../cv/types.ts'
import { TextLink } from './TextLink.tsx'

export function Profile({ name, title, nav = [] }: ProfileData) {
  return (
    <header className="flex flex-col justify-between gap-x-2 gap-y-6 sm:flex-row sm:items-end">
      <div className="flex flex-col">
        <a className="w-fit text-lg font-medium" href="/">
          {name}
        </a>
        <p className="text-tertiary">{title}</p>
      </div>
      {nav.length > 0 && (
        <nav aria-label="Primary" className="flex items-center gap-2">
          {nav.map((link) => (
            <TextLink key={link.href + link.label} {...link} />
          ))}
        </nav>
      )}
    </header>
  )
}
