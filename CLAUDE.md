# MyResume

React 19 + TypeScript CV page. Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`, no config file — tokens live in `@theme` in `src/style.css`, copied from merycodes.com except the type scale — body `text-body` 15px, `text-sm` 14px, headings `text-lg` 18px), Vitest.

- Domain terms: CONTEXT.md. Data shape: `src/cv/types.ts`.
- Use `type`, not `interface`.
- Content changes go in `src/cv/data.ts` only.
- `<App cv={cv} />` is pure — it renders only from its `cv` prop. `src/main.tsx` is the only file that touches the DOM or imports the data.
- Components live in `src/components/`; they are internal to `App`.
- Conditional rendering: use `arr.length > 0 && …`, never `arr.length && …` (React prints the `0`).
- Test through `App` with `renderToStaticMarkup` (`src/App.test.tsx`), not individual components.
- Design tokens (`lightest`, `primary`, `secondary`, `tertiary`) and the `link-underline` utility live in `src/style.css`.

Commands: `npm run dev`, `npm run build` (runs `tsc` first), `npm run typecheck`, `npm test`.
