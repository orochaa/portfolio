import { GlowContainer } from '@/components/glow-container'
import { GithubIcon } from '@/components/icons/github'
import { LinkIcon } from '@/components/icons/link'
import { LearnMore } from '@/components/learn-more'
import { useTranslation } from '@/hooks/use-translation'
import type { Project } from '@/lib/data/projects'
import { formatNumber } from '@/lib/utils'
import { Download, LockKeyhole, Star } from 'lucide-react'
import { motion } from 'motion/react'

export interface ProjectProps {
  project: Project
  groupIndex?: number
  projectIndex?: number
}

export function Project(props: ProjectProps): React.JSX.Element {
  const { t, lang } = useTranslation()

  const { project, groupIndex, projectIndex } = props

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
      className="min-h-40 max-w-[30rem]"
    >
      <GlowContainer
        containerClassName="h-full flex flex-col rounded-lg border border-zinc-600"
        glowClassName="size-96 from-zinc-200"
      >
        <div className="relative p-0.5 pb-0">
          <span className="absolute inset-0.5 bottom-0 rounded-t-md bg-zinc-900" />
          <a
            title={t('project.link')}
            href={project.liveUrl ?? project.githubUrl ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="relative block h-[16.75rem] overflow-hidden rounded-t-md"
          >
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                playsInline
                loop
                muted
                controls={false}
                className="mx-auto h-full"
              />
            ) : project.imgUrl ? (
              <img
                src={project.imgUrl}
                alt={`${project.name}.jpg`}
                loading="lazy"
                className="mx-auto h-full object-cover sm:object-fill"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/35 to-orange-300/35">
                <div className="max-w-4/6">
                  <p className="text-lg font-semibold">
                    🚀 {project.displayName}
                  </p>
                  <p className="text-zinc-100">{project.description[lang]}</p>
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="block h-[1px] w-full bg-zinc-600" />
        <div className="relative grow p-0.5">
          <span className="absolute inset-0.5 rounded-b-md bg-zinc-900" />
          <div className="relative p-4">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2">
                <span className="text-lg font-semibold">
                  {project.displayName}
                </span>
                {!!project.isPrivate && (
                  <span
                    title={t('project.privateTitle')}
                    className="flex items-center gap-1 rounded-lg bg-zinc-700/70 px-2 py-0.5 text-sm text-zinc-100"
                  >
                    <LockKeyhole size={12} />
                    {t('project.private')}
                  </span>
                )}
              </p>
              <div className="flex gap-1">
                {!!project.liveUrl && (
                  <GlowContainer
                    containerClassName="rounded-md p-0.5 bg-zinc-800 hover:text-blue-300 active:text-blue-300"
                    glowClassName="from-blue-400 size-20"
                  >
                    <span className="absolute inset-0.5 rounded-md bg-zinc-800" />
                    <a
                      title={t('project.link')}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block p-1.5"
                    >
                      <LinkIcon size={20} />
                    </a>
                  </GlowContainer>
                )}
                {!!project.githubUrl && (
                  <GlowContainer
                    containerClassName="rounded-md p-0.5 bg-zinc-800 hover:text-indigo-300 active:text-indigo-300"
                    glowClassName="from-indigo-400 size-20"
                  >
                    <span className="absolute inset-0.5 rounded-md bg-zinc-800" />
                    <a
                      title={t('project.github')}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block p-1.5"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </GlowContainer>
                )}
              </div>
            </div>
            <p className="min-h-12">{project.description[lang]}</p>
            <div className="mt-3 space-y-1">
              <div className="flex gap-1">
                {!!project.downloadsPerMonth && (
                  <span
                    title={t('project.downloadsTitle')}
                    className="flex items-center gap-1 rounded-lg bg-green-500/20 px-2 py-0.5 text-sm text-green-300"
                  >
                    <Download size={12} />
                    {t('project.downloadsPerMonth', {
                      downloads: formatNumber(project.downloadsPerMonth),
                    })}
                  </span>
                )}
                {!!project.stars && (
                  <span className="flex items-center gap-1 rounded-lg bg-yellow-400/20 px-2 py-0.5 text-sm text-yellow-300">
                    <Star size={12} />
                    {formatNumber(project.stars)}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {project.languages.map(language => (
                  <LearnMore key={language.name} {...language}>
                    <span className="rounded-lg bg-blue-500/10 px-2 py-0.5 text-sm text-blue-200">
                      {language.name}
                    </span>
                  </LearnMore>
                ))}
                {project.technologies.map(technology => (
                  <LearnMore key={technology.name} {...technology}>
                    <span className="rounded-lg bg-orange-300/10 px-2 py-0.5 text-sm text-orange-200">
                      {technology.name}
                    </span>
                  </LearnMore>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlowContainer>
    </motion.li>
  )
}
