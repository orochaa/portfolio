import { AboutMeSection } from '@/sections/aboubt-me-section'
import { ProjectsSection } from '@/sections/projects-section'
import { TechnologiesSection } from '@/sections/technologies-section'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectsSection />
    </div>
  )
}
