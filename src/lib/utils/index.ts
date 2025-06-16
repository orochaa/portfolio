import type { MouseEvent } from 'react'

export * from './format'

export function scrollTo(
  id: `#${string}`,
  options?: { offset?: number; behavior?: ScrollBehavior }
) {
  return (e: MouseEvent): void => {
    e.preventDefault()
    const title = document.querySelector(id)

    if (!title) {
      return
    }

    const { behavior = 'smooth', offset = 0 } = options ?? {}

    window.scroll({
      top: Math.round(
        title.getBoundingClientRect().top +
          document.documentElement.scrollTop -
          offset
      ),
      left: 0,
      behavior,
    })
    globalThis.history.pushState({}, '', id)
  }
}
