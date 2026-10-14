import { Collaborations } from './components/Collaborations.tsx'
import { Connect } from './components/Connect.tsx'
import { Profile } from './components/Profile.tsx'
import { Timeline } from './components/Timeline.tsx'
import type { Cv } from './cv/types.ts'

/** The whole CV page. Pure: renders only from `cv`; empty sections are omitted. */
export function App({ cv }: { cv: Cv }) {
  return (
    <div className="mx-auto flex max-w-2xl justify-center p-8 md:py-16">
      <div className="w-full">
        <Profile {...cv.profile} />
        <main className="mt-16">
          <Timeline heading="Experience" entries={cv.experience?.map((job) => ({ ...job, title: job.company }))} />
          <Timeline
            heading="Education"
            entries={cv.education?.map((edu) => ({ ...edu, title: edu.school, summary: edu.degree }))}
          />
          {cv.collaborations && <Collaborations {...cv.collaborations} />}
        </main>
        <Connect links={cv.connect} />
      </div>
    </div>
  )
}
