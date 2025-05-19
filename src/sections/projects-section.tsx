import { Project } from '@/components/project'
import { Title } from '@/components/title'
import { groups } from '@/lib/data/groups'
import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent } from 'react'

interface HeadingItem {
  id: string
  text: string | null
}

export function ProjectsSection(): React.JSX.Element {
  const [headings, setHeadings] = useState<HeadingItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

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
  }, [])

  return (
    <div className="mx-auto w-11/12 max-w-6xl pb-20">
      <Title className="bg-background sticky top-0 left-0 z-20 pt-4">
        Projects
      </Title>
      <div className="relative flex">
        <nav className="sticky top-20 left-0 h-fit">
          <ul className="w-36 space-y-1 border-l border-zinc-600">
            {headings.map(h => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  data-active={activeId === h.id}
                  className="relative block rounded-r px-3 py-1.5 text-base transition-colors before:absolute before:bottom-0 before:left-[-1px] before:h-full before:w-[1px] before:bg-zinc-600 hover:bg-zinc-900 hover:before:bg-zinc-500 data-active:bg-zinc-800 data-active:font-medium data-active:before:bg-blue-400"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={e => handleGoToProjectSection(e, h)}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-8 px-6">
          {groups.map((group, groupIndex) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
