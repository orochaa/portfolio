import { GlowContainer } from '@/components/glow-container'
import { ProjectHeader } from '@/components/project/project-header'
import { ProjectMedia } from '@/components/project/project-media'
import { ProjectTags } from '@/components/project/project-tags'
import { useTranslation } from '@/hooks/use-translation'
import type { Project } from '@/lib/data/projects'
import { motion } from 'motion/react'

export interface ProjectProps {
  project: Project
  groupIndex?: number
  projectIndex?: number
}

export function Project(props: ProjectProps): React.JSX.Element {
  const { project, groupIndex, projectIndex } = props

  const { t, lang } = useTranslation()

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay:
              groupIndex !== undefined &&
              projectIndex !== undefined &&
              groupIndex < 2
                ? 0.2 * projectIndex
                : 0.2,
            duration: 0.3,
          },
        },
      }}
      viewport={{ once: true }}
      className="min-h-40 w-[30rem] max-w-full"
    >
      <GlowContainer
        containerClassName="h-full flex flex-col rounded-lg border border-zinc-600"
        glowClassName="size-96 from-zinc-200"
      >
        <div className="relative p-0.5 pb-0">
          <span className="absolute inset-0.5 bottom-0 rounded-t-md bg-zinc-900" />
          <ProjectMedia project={project} lang={lang} />
        </div>
        <div className="block h-[1px] w-full bg-zinc-600" />
        <div className="relative grow p-0.5">
          <span className="absolute inset-0.5 rounded-b-md bg-zinc-900" />
          <div className="relative p-4">
            <ProjectHeader project={project} t={t} />
            <p className="min-h-12">{project.description[lang]}</p>
            <ProjectTags project={project} t={t} />
          </div>
        </div>
      </GlowContainer>
    </motion.li>
  )
}
