import { Project } from '@/components/project'
import { useTranslation } from '@/hooks/use-translation'
import { projectGroups } from '@/lib/data/groups'
import type { ProjectGroup } from '@/lib/data/groups'
import type { ProgrammingLanguageName } from '@/lib/data/programming-languages'
import type { TagName } from '@/lib/data/projects'
import type { TechnologyName } from '@/lib/data/technologies'
import { scrollTo } from '@/lib/utils'
import { useEffect, useMemo, useState } from 'react'

interface HeadingItem {
  id: string
  text: string | null
}

type FilterOption = ProgrammingLanguageName | TechnologyName | TagName

const filterOptions: FilterOption[] = [
  'typescript',
  'go',
  'node',
  'react',
  'react-native',
  'serverless',
  'live',
]

export function ProjectsSection(): React.JSX.Element {
  const { t } = useTranslation()

  const [headings, setHeadings] = useState<HeadingItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([])

  const filteredGroups = useMemo((): ProjectGroup[] => {
    if (selectedFilters.length === 0) {
      return projectGroups
    }

    const filteredGroups: ProjectGroup[] = []

    for (const projectGroup of projectGroups) {
      const filteredProjects = projectGroup.projects.filter(project => {
        const projectTags = [
          ...project.languages,
          ...project.technologies,
          ...project.tags,
        ]

        return selectedFilters.every(filter =>
          projectTags.some(tag =>
            typeof tag === 'string' ? tag === filter : tag.name === filter
          )
        )
      })

      if (filteredProjects.length > 0) {
        filteredGroups.push({
          ...projectGroup,
          projects: filteredProjects,
        })
      }
    }

    return filteredGroups
  }, [selectedFilters])

  useEffect(() => {
    const h3Nodes = [...document.querySelectorAll<HTMLHeadingElement>('h3[id]')]
    const extracted = h3Nodes.map(n => ({
      id: n.id,
      text: n.textContent,
    }))
    setHeadings(extracted)

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        rootMargin: `0px 0px -50% 0px`,
        threshold: 0,
      }
    )

    for (const n of h3Nodes) {
      observer.observe(n)
    }

    return (): void => {
      observer.disconnect()
    }
  }, [selectedFilters])

  return (
    <div className="bg-background py-20">
      <div id="projects" className="mx-auto w-11/12 max-w-6xl">
        <h2 className="bg-background relative top-[3.05rem] left-0 z-10 mb-6 pt-4 pb-3 text-2xl after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-zinc-400 sm:sticky">
          {t('projects.title')}
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
          <nav className="relative left-0 h-fit sm:sticky sm:top-32">
            <p className="mb-1.5 text-base font-semibold">
              {t('projects.categories')}
            </p>
            <div className="overflow-x-auto pb-3">
              <ul className="flex w-fit flex-row gap-1 border-zinc-600 sm:w-36 sm:flex-col sm:border-l">
                {headings.map(h => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      data-active={activeId === h.id}
                      className="relative block rounded-r px-3 py-1.5 text-base before:absolute before:bottom-0 before:left-[-1px] before:h-full before:w-0 before:bg-zinc-600 hover:bg-zinc-900 hover:before:bg-zinc-500 active:bg-zinc-900 active:before:bg-zinc-500 data-active:bg-zinc-800 data-active:font-medium data-active:before:bg-blue-400 sm:before:w-[1px]"
                      onClick={scrollTo(`#${h.id}`, 125)}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 mb-1.5 text-base font-semibold">
              {t('projects.filters')}
            </p>
            <div className="overflow-x-auto pb-3">
              <ul className="flex w-fit flex-row gap-1 border-b border-zinc-600 sm:w-36 sm:flex-col sm:border-0 sm:border-l">
                {filterOptions.map(option => {
                  const isSelected = selectedFilters.includes(option)

                  return (
                    <li key={option}>
                      <button
                        type="button"
                        data-selected={isSelected}
                        className="relative block w-full rounded-r px-3 py-1.5 text-left text-base whitespace-nowrap before:absolute before:bottom-[-1px] before:left-0 before:h-[1px] before:w-full before:bg-zinc-600 hover:bg-zinc-900 hover:before:bg-zinc-500 active:bg-zinc-900 active:before:bg-zinc-500 data-selected:bg-zinc-800 data-selected:font-medium data-selected:before:bg-orange-400 sm:before:bottom-0 sm:before:left-[-1px] sm:before:h-full sm:before:w-[1px]"
                        // eslint-disable-next-line react/jsx-no-bind
                        onClick={() =>
                          setSelectedFilters(state =>
                            isSelected
                              ? state.filter(o => o !== option)
                              : [...state, option]
                          )
                        }
                      >
                        {option}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
          <div className="grow space-y-8 sm:px-6">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group, groupIndex) => (
                <div key={group.name}>
                  <h3 id={group.name} className="mb-2 text-xl font-semibold">
                    {group.name}
                  </h3>
                  <ul className="grid w-fit grid-cols-1 gap-2 xl:grid-cols-2">
                    {group.projects.map((project, projectIndex) => (
                      <Project
                        key={project.name}
                        project={project}
                        groupIndex={groupIndex}
                        projectIndex={projectIndex}
                      />
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>{t('projects.notFound')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
