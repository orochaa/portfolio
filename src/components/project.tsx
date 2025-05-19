import { GlowContainer } from '@/components/glow-container'
import { GithubIcon } from '@/components/icons/github'
import { LinkIcon } from '@/components/icons/link'
import { LearnMore } from '@/components/learn-more'
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
      className="min-h-40"
    >
      <GlowContainer
        containerClassName="h-full rounded-lg border border-zinc-600 "
        boxClassName="rounded-lg"
        glowClassName="size-96 from-zinc-200"
      >
        {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
        {!!(project.imgUrl || project.videoUrl) && (
          <a
            title="Go to application"
            href={project.liveUrl ?? project.githubUrl ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="block border-b border-zinc-600 bg-gradient-to-br from-blue-500/20 to-orange-300/20"
          >
            {project.imgUrl ? (
              <img
                src={project.imgUrl}
                alt=""
                loading="lazy"
                className="mx-auto h-[16.75rem]"
              />
            ) : project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                playsInline
                loop
                muted
                controls={false}
                className="mx-auto h-[16.75rem]"
              />
            ) : null}
          </a>
        )}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2">
              <span className="text-lg font-semibold">
                {project.displayName}
              </span>
              {!!project.isPrivate && (
                <span
                  title="Project is private"
                  className="flex items-center gap-1 rounded-lg bg-zinc-700/70 px-2 py-0.5 text-sm text-zinc-100"
                >
                  <LockKeyhole size={12} />
                  private
                </span>
              )}
            </p>
            <div className="flex gap-1">
              {!!project.liveUrl && (
                <GlowContainer
                  containerClassName="rounded-md p-2 hover:text-blue-300"
                  boxClassName="rounded-md bg-zinc-800"
                  glowClassName="from-blue-400 size-20"
                >
                  <a
                    title="Go to application"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon size={20} />
                  </a>
                </GlowContainer>
              )}
              {!!project.githubUrl && (
                <GlowContainer
                  containerClassName="rounded-md p-2 hover:text-indigo-300"
                  boxClassName="rounded-md bg-zinc-800"
                  glowClassName="from-indigo-400 size-20"
                >
                  <a
                    title="Go to repository"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon size={20} />
                  </a>
                </GlowContainer>
              )}
            </div>
          </div>
          <p className="min-h-12">{project.description}</p>
          <div className="mt-3 space-y-1">
            <div className="flex gap-1">
              {!!project.downloadsByMonth && (
                <span
                  title="Downloads per month"
                  className="flex items-center gap-1 rounded-lg bg-green-500/20 px-2 py-0.5 text-sm text-green-300"
                >
                  <Download size={12} />
                  {formatNumber(project.downloadsByMonth)}/month
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
      </GlowContainer>
    </motion.li>
  )
}
