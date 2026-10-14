import type { Link } from '../cv/types.ts'
import { TextLink } from './TextLink.tsx'

export function Connect({ links = [] }: { links?: Link[] }) {
  if (links.length === 0) return null

  return (
    <footer>
      <h2 className="mt-16 mb-6 text-lg font-semibold">Connect</h2>
      <div className="flex flex-wrap items-center gap-4">
        {links.map((link) => (
          <TextLink key={link.href} {...link} />
        ))}
      </div>
    </footer>
  )
}
