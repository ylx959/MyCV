# MyResume

TypeScript + HTML CV page. Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`, no config file — tokens live in `@theme` in `src/style.css`, copied from merycodes.com; keep them exact), Vitest.

- Domain terms: CONTEXT.md. Data shape: `src/cv/types.ts`.
- Use `type`, not `interface`.
- Content changes go in `src/cv/data.ts` only.
- `renderCv` is pure (no DOM); `src/main.ts` is the only file touching the DOM.
- Always interpolate through the `html` tagged template so text gets escaped. For optional fragments use `cond && html\`…\``; `Html` rejects numbers, so length checks must be `arr.length > 0`.
- Test through `renderCv` (`src/cv/render.test.ts`), not individual sections.
- Design tokens (`lightest`, `primary`, `secondary`, `tertiary`) and the `link-underline` utility live in `src/style.css`.

Commands: `npm run dev`, `npm run build` (runs `tsc` first), `npm run typecheck`, `npm test`.
