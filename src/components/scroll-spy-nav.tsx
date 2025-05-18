import { useEffect, useState } from 'react'

interface HeadingItem {
  id: string
  text: string | null
}

export function ScrollSpyNav(): React.JSX.Element {
  const [headings, setHeadings] = useState<HeadingItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

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
    <nav className="sticky top-20 left-0 h-fit">
      <ul className="w-36 space-y-1 border-l border-zinc-600">
        {headings.map(h => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              data-active={activeId === h.id}
              className="relative block rounded-r px-3 py-1.5 text-base transition-colors before:absolute before:bottom-0 before:left-[-1px] before:h-full before:w-[1px] before:bg-zinc-600 hover:bg-zinc-900 hover:before:bg-zinc-500 data-active:bg-zinc-800 data-active:font-medium data-active:before:bg-blue-400"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={e => {
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
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
