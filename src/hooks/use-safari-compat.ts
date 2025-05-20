import { useEffect } from 'react'

export function useSafariCompat(): void {
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    if (!isSafari) {
      return
    }

    // Polyfill for smooth scroll in older Safari
    if (
      typeof window.scrollTo === 'function' &&
      !('scrollBehavior' in document.documentElement.style)
    ) {
      import('smoothscroll-polyfill')
        .then(module => {
          module.polyfill()
        })
        .catch(console.error)
    }

    // Add Intl support if missing (Safari 13 and lower)
    if (
      typeof Intl === 'undefined' ||
      Intl.DateTimeFormat.supportedLocalesOf('pt-BR').length === 0
    ) {
      import('intl')
        .then(async () =>
          Promise.all([
            // @ts-expect-error foo
            import('intl/locale-data/jsonp/pt-BR.js'),
            // @ts-expect-error foo
            import('intl/locale-data/jsonp/en.js'),
          ])
        )
        .catch(console.error)
    }
  }, [])
}
