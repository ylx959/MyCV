# CV — Domain Context

A single-page personal CV, rendered from one data file. Visual design follows merycodes.com — classes and theme tokens copied from its compiled Tailwind CSS (system font stack, zinc hex colors). Type scale is ours: headings 18px, body 15px, small 14px.

The exact data shape lives in `src/cv/types.ts`; this file defines the terms.

## Glossary

**CV**: the whole document (`Cv`). One object exported from `src/cv/data.ts`.

**Profile**: name, title, and the header **Links**.

**Link**: a labelled URL with a trailing icon (↗ by default). External (`http…`) links open in a new tab.

**Rich text**: plain text, or text mixed with inline **Links**. Used for job summaries and highlights.

**Period**: a single year when `end` is omitted, or "start – Present" when `end` is `null`.

**Experience**: a job held, with a **Period**.

**Project**: something built, with a **Period** and an optional link on its name. Rendered right after Experience in the same layout.

**Education**: a school attended, with a **Period**. Rendered right after Experience in the same layout (school as heading, degree as the line below).

**Skills**: labelled groups of skills (e.g. Languages, Frontend), each shown as a row of chips. Rendered after Education.

**Collaborations**: people worked with. A **Person** without an avatar shows initials.

**Connect**: the footer **Links**.

## Modules

**`<App cv={cv} />`** (`src/App.tsx`): the one interface the page uses. CV data in, page out. Pure (renders only from `cv`), omits empty sections. Tests go through this.

Components in `src/components/` are internal to `App`. Experience, Projects and Education all render through `Timeline`, which always shows entries newest first (by `start`, then `end`; ongoing first) — the order in `data.ts` does not matter.
