import { cn } from '@/lib/utils'
import { motion, useMotionValue } from 'motion/react'
import { useCallback, useRef, useState } from 'react'
import type { PointerEvent, ReactNode } from 'react'

export interface GlowContainerProps {
  children: ReactNode
  containerClassName?: string
  glowClassName?: string
}

export function GlowContainer(props: GlowContainerProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isHover, setIsHover] = useState(false)

  const handlePointerEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const handlePointerLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const container = containerRef.current

      if (!container) {
        return
      }

      const rect = container.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    },
    [x, y]
  )

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', props.containerClassName)}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.span
        aria-hidden
        className={cn(
          'absolute top-0 left-0 -translate-1/2 bg-radial via-transparent transition-opacity',
          props.glowClassName
        )}
        style={{
          translateX: x,
          translateY: y,
          opacity: isHover ? 100 : 0,
        }}
      />
      {props.children}
    </div>
  )
}
