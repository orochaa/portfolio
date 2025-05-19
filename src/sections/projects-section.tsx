import { Project } from '@/components/project'
import { projectGroups } from '@/lib/data/groups'
import type { ProjectGroup } from '@/lib/data/groups'
import type { LanguageName } from '@/lib/data/languages'
import type { TagName } from '@/lib/data/projects'
import type { TechnologyName } from '@/lib/data/technologies'
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { MouseEvent } from 'react'

interface HeadingItem {
  id: string
  text: string | null
}

type FilterOption = LanguageName | TechnologyName | TagName

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

  const handleGoToProjectSection = useCallback(
    (e: MouseEvent, h: HeadingItem) => {
      e.preventDefault()
      const title = document.querySelector(`#${h.id}`)

      if (!title) {
        return
      }

      window.scroll({
        top: Math.round(
          title.getBoundingClientRect().top +
            document.documentElement.scrollTop -
            80
        ),
        left: 0,
        behavior: 'smooth',
      })
    },
    []
  )

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
    <div className="mx-auto w-11/12 max-w-6xl py-20">
      <h2 className="bg-background sticky top-0 left-0 z-20 mb-6 pt-4 pb-3 text-3xl after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-linear-to-r after:from-zinc-400 after:to-zinc-200">
        Projects
      </h2>
      <div className="relative flex">
        <nav className="sticky top-20 left-0 h-fit">
          <p className="mb-1.5 text-base font-semibold">Categories</p>
          <ul className="w-36 space-y-1 border-l border-zinc-600">
            {headings.map(h => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  data-active={activeId === h.id}
                  className="relative block rounded-r px-3 py-1.5 text-base before:absolute before:bottom-0 before:left-[-1px] before:h-full before:w-[1px] before:bg-zinc-600 hover:bg-zinc-900 hover:before:bg-zinc-500 data-active:bg-zinc-800 data-active:font-medium data-active:before:bg-blue-400"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={e => handleGoToProjectSection(e, h)}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 mb-1.5 text-base font-semibold">Filters</p>
          <ul className="w-36 space-y-1 border-l border-zinc-600">
            {filterOptions.map(option => {
              const isSelected = selectedFilters.includes(option)

              return (
                <li key={option}>
                  <button
                    type="button"
                    data-selected={isSelected}
                    className="relative block w-full rounded-r px-3 py-1.5 text-left text-base before:absolute before:bottom-0 before:left-[-1px] before:h-full before:w-[1px] before:bg-zinc-600 hover:bg-zinc-900 hover:before:bg-zinc-500 data-selected:bg-zinc-800 data-selected:font-medium data-selected:before:bg-orange-400"
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
        </nav>
        <div className="space-y-8 px-6">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group, groupIndex) => (
              <div key={group.name}>
                <h3 id={group.name} className="mb-2 text-xl font-semibold">
                  {group.name}
                </h3>
                <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
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
            <p>😦 There is no project with selected filters.</p>
          )}
        </div>
      </div>
    </div>
  )
}
