# CV — Domain Context

A single-page personal CV, rendered from one data file. Visual design follows merycodes.com — classes and theme tokens copied from its compiled Tailwind CSS (system font stack, `text-sm` = 15px, zinc hex colors).

The exact data shape lives in `src/cv/types.ts`; this file defines the terms.

## Glossary

**CV**: the whole document (`Cv`). One object exported from `src/cv/data.ts`.

**Profile**: name, title, and the header **Links**.

**Link**: a labelled URL with a trailing icon (↗ by default). External (`http…`) links open in a new tab.

**Rich text**: plain text, or text mixed with inline **Links**. Used for job summaries and highlights.

**Period**: a single year when `end` is omitted, or "start – Present" when `end` is `null`.

**Experience**: a job held, with a **Period**.

**Education**: a school attended, with a **Period**. Rendered right after Experience in the same layout (school as heading, degree as the line below).

**Collaborations**: people worked with. A **Person** without an avatar shows initials.

**Connect**: the footer **Links**.

## Modules

**`renderCv(cv)`** (`src/cv/render.ts`): the one interface the page uses. CV data in, HTML string out. Pure, escapes all text, omits empty sections. Tests go through this.

Experience and Education both render through the internal `timeline` section. Sections (`src/cv/sections/*`) and `html` (`src/cv/html.ts`) are internal to `renderCv` — not called from elsewhere.
