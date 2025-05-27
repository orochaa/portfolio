import { AboutMeSection } from '@/sections/aboubt-me-section'
import { EducationSection } from '@/sections/education-section'
import { HeaderSection } from '@/sections/header-section'
import { ProjectsSection } from '@/sections/projects-section'
import { TechnologiesSection } from '@/sections/technologies-section'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <HeaderSection />
      <AboutMeSection />
      <EducationSection />
      <TechnologiesSection />
      <ProjectsSection />
    </div>
  )
}
