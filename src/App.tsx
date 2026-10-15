import { Collaborations } from './components/Collaborations.tsx'
import { Connect } from './components/Connect.tsx'
import { Profile } from './components/Profile.tsx'
import { Skills } from './components/Skills.tsx'
import { Timeline } from './components/Timeline.tsx'
import type { Cv } from './cv/types.ts'

/**
 * The whole CV page. Pure: renders only from `cv`; empty sections are omitted.
 * `onToggleTheme`, when given, shows the light/dark dot beside the name.
 */
export  default function App({ cv, onToggleTheme }: { cv: Cv; onToggleTheme?: () => void }) {
  return (
    <div className="mx-auto flex max-w-2xl justify-center p-8 md:py-16">
      <div className="w-full">
        <Profile {...cv.profile} onToggleTheme={onToggleTheme} />
        <main className="mt-16">
          <Timeline heading="Experience" entries={cv.experience?.map((job) => ({ ...job, title: job.company }))} />
          <Timeline heading="Projects" entries={cv.projects?.map((p) => ({ ...p, title: p.name }))} />
          <Timeline
            heading="Education"
            entries={cv.education?.map((edu) => ({ ...edu, title: edu.school, summary: edu.degree }))}
          />
          <Skills groups={cv.skills} />
          {cv.collaborations && <Collaborations {...cv.collaborations} />}
        </main>
        <Connect links={cv.connect} />
      </div>
    </div>
  )
}
