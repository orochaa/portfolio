import { AboutMeSection } from '@/sections/aboubt-me-section'
import { ProjectsSection } from '@/sections/projects-section'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <AboutMeSection />
      <ProjectsSection />
    </div>
  )
}
