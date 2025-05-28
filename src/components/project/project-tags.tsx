import { LearnMore } from '@/components/learn-more'
import type { Translation } from '@/hooks/use-translation'
import type { Project } from '@/lib/data/projects'
import { formatNumber } from '@/lib/utils'
import { Download, Star } from 'lucide-react'

export interface ProjectTagsProps {
  project: Project
  t: Translation['t']
}

export function ProjectTags(props: ProjectTagsProps): React.JSX.Element {
  const { project, t } = props

  return (
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
  )
}
