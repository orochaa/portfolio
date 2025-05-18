import { useClickOutside } from '@/hooks/use-click-outside'
import { ExternalLink } from 'lucide-react'
import { motion, useMotionValue } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export interface LearnMoreProps {
  children: ReactNode
  displayName: string
  description: string
  url: string
}

export function LearnMore(props: LearnMoreProps): React.JSX.Element {
  const { children, description, displayName, url } = props

  const [isVisible, setIsVisible] = useState(false)
  const left = useMotionValue(0)

  const containerRef = useRef<HTMLDivElement>(null)
  useClickOutside(containerRef, () => {
    setIsVisible(false)
  })

  const tooltipRef = useRef<HTMLAnchorElement>(null)

  useLayoutEffect(() => {
    if (
      !isVisible ||
      !containerRef.current?.parentElement ||
      !tooltipRef.current
    ) {
      return
    }

    const parent = containerRef.current.parentElement
    const tooltip = tooltipRef.current

    // reset style first, so we measure the natural size
    tooltip.style.left = '0px'

    // DOMRects give us viewport positions; we need them relative to the parent
    const parentRect = parent.getBoundingClientRect()
    const tipRect = tooltip.getBoundingClientRect()

    // Default: bottom-left (relative to parent)
    let newLeft: CSSProperties['left'] = 0

    // ─── Horizontal overflow ──────────────────────────────
    const overflowRight = tipRect.right - parentRect.right

    if (overflowRight > 0) {
      newLeft = newLeft - overflowRight
    }

    left.set(newLeft)
  }, [isVisible, left])

  return (
    <div ref={containerRef} className="relative inline-block shrink-0">
      <button
        type="button"
        title="Lear more"
        data-active={isVisible}
        className="transition data-active:-translate-y-1"
        onClick={() => setIsVisible(state => !state)}
      >
        {children}
      </button>
      {!!isVisible && (
        <motion.a
          ref={tooltipRef}
          href={url}
          target="_blank"
          rel="noreferrer"
          title="Access documentation"
          className="group/learn-more absolute bottom-[2rem] z-10 w-max max-w-96 rounded-lg border border-transparent bg-zinc-800 p-3 transition hover:border-zinc-500"
          style={{ left }}
        >
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">{displayName}</p>
            <ExternalLink
              size={16}
              className="group-hover/learn-more:text-blue-200"
            />
          </div>
          <p className="text-sm">{description}</p>
        </motion.a>
      )}
    </div>
  )
}
