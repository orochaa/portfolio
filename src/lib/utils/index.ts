import type { MouseEvent } from 'react'

export * from './format'

export function scrollTo(id: `#${string}`, offset: number = 0) {
  return (e: MouseEvent): void => {
    e.preventDefault()
    const title = document.querySelector(id)

    if (!title) {
      return
    }

    window.scroll({
      top: Math.round(
        title.getBoundingClientRect().top +
          document.documentElement.scrollTop -
          offset
      ),
      left: 0,
      behavior: 'smooth',
    })
    globalThis.history.pushState({}, '', id)
  }
}
