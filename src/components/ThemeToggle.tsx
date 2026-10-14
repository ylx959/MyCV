import type { MouseEvent } from 'react'

/** Springy outward pop on tap; the implicit start/end keyframes settle back to the resting (or hovered) size. */
const pop: Keyframe[] = [{ offset: 0.35, scale: '1.3' }, { offset: 0.7, scale: '0.72' }]

/** The dot beside the name. Hover tightens it; a tap pops it outward and flips light/dark. */
export function ThemeToggle({ onToggle }: { onToggle: () => void }) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.firstElementChild?.animate(pop, { duration: 450, easing: 'ease-out' })
    onToggle()
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={handleClick}
      className="group -m-2 grid cursor-pointer place-items-center p-2"
    >
      <span className="block size-3.5 rounded-full bg-primary transition-[scale] duration-200 ease-out scale-80 group-hover:scale-60" />
    </button>
  )
}
