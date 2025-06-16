import { useDailyAppPing } from '@/hooks/use-daily-app-ping'
import { ContactSection } from '@/sections/contact-section'
import { EducationSection } from '@/sections/education-section'
import { FooterSection } from '@/sections/footer-section'
import { HardSkillsSection } from '@/sections/hard-skills-section'
import { HeaderSection } from '@/sections/header-section'
import { HomeSection } from '@/sections/home-section'
import { ProjectsSection } from '@/sections/projects-section'
import { SoftSkillsSection } from '@/sections/soft-skills-section'
import { TechnologiesSection } from '@/sections/technologies-section'

export function App(): React.JSX.Element {
  useDailyAppPing()

  return (
    <div className="min-h-svh">
      <HeaderSection />
      <HomeSection />
      <EducationSection />
      <HardSkillsSection />
      <TechnologiesSection />
      <SoftSkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
