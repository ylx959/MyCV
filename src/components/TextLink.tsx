import type { ReactNode } from 'react'
import type { Icon, Link, RichText as RichTextValue } from '../cv/types.ts'

const icons: Record<Icon, ReactNode> = {
  arrow: <path d="M12 10V4m0 0H6m6 0l-7.833 7.833" />,
  note: (
    <path d="m8.833 4.167 1.89-1.89c.521-.522 1.365-.522 1.886 0l1.114 1.114c.521.52.521 1.364 0 1.885l-1.89 1.89m-3-3-6.61 6.61c-.25.25-.39.59-.39.943v2.448h2.448c.353 0 .692-.14.943-.39l6.609-6.61m-3-3 3 3" />
  ),
  image: (
    <>
      <path
        strokeLinecap="butt"
        d="M11 13.667 6.278 8.943a1.333 1.333 0 0 0-1.886 0L2.334 11m2 2.667h7.333a2 2 0 0 0 2-2V4.333a2 2 0 0 0-2-2H4.334a2 2 0 0 0-2 2v7.334a2 2 0 0 0 2 2Z"
      />
      <path
        strokeLinecap="square"
        strokeWidth={0.8}
        d="m9.111 5.778.556-1.111.555 1.11 1.111.556-1.11.556L9.666 8 9.11 6.889 8 6.333z"
      />
    </>
  ),
}

/** `href` plus new-tab props for external (http…) URLs. */
export const linkProps = (href: string) =>
  /^https?:/.test(href) ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href }

/** Underlined text link with a trailing icon (default ↗). */
export function TextLink({ label, href, icon = 'arrow' }: Link) {
  return (
    <a
      className={`link-underline group inline-flex items-center ${icon === 'arrow' ? 'gap-1' : 'gap-1.5'} text-primary`}
      {...linkProps(href)}
    >
      {label}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="text-ink/30 group-hover:text-ink/80"
      >
        {icons[icon]}
      </svg>
    </a>
  )
}

/** Plain text, or text mixed with inline links. */
export function RichText({ value }: { value: RichTextValue }) {
  return [value].flat().map((part, i) => (typeof part === 'string' ? part : <TextLink key={i} {...part} />))
}
