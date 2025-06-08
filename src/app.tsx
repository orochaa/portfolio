import { useDailyAppPing } from '@/hooks/use-daily-app-ping'
import { AboutMeSection } from '@/sections/aboubt-me-section'
import { EducationSection } from '@/sections/education-section'
import { HeaderSection } from '@/sections/header-section'
import { ProjectsSection } from '@/sections/projects-section'
import { SoftSkillsSection } from '@/sections/soft-skills-section'
import { TechnologiesSection } from '@/sections/technologies-section'

export function App(): React.JSX.Element {
  useDailyAppPing()

  return (
    <div className="min-h-svh">
      <HeaderSection />
      <AboutMeSection />
      <EducationSection />
      <TechnologiesSection />
      <SoftSkillsSection />
      <ProjectsSection />
    </div>
  )
}
