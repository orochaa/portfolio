import { GlowContainer } from '@/components/glow-container'
import { GithubIcon } from '@/components/icons/github'
import { LinkIcon } from '@/components/icons/link'
import type { Translation } from '@/hooks/use-translation'
import type { Project } from '@/lib/data/projects'
import { LockKeyhole } from 'lucide-react'

export interface ProjectHeaderProps {
  project: Project
  t: Translation['t']
}

export function ProjectHeader(props: ProjectHeaderProps): React.JSX.Element {
  const { project, t } = props

  return (
    <div className="flex items-center justify-between">
      <p className="flex items-center gap-2">
        <span className="text-lg font-semibold">{project.displayName}</span>
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
              className="relative"
            >
              <LinkIcon size={20} className="p-1.5" />
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
              className="relative"
            >
              <GithubIcon size={20} className="p-1.5" />
            </a>
          </GlowContainer>
        )}
      </div>
    </div>
  )
}
