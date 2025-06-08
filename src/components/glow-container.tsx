import { cn } from '@/lib/utils'
import { motion, useMotionValue } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { ComponentProps, ReactNode } from 'react'

export interface GlowContainerProps extends ComponentProps<'div'> {
  children: ReactNode
  containerClassName: string
  glowClassName: string
}

export function GlowContainer(props: GlowContainerProps): React.JSX.Element {
  const { containerClassName, glowClassName, children, ..._props } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const handler = (e: PointerEvent): void => {
      const container = containerRef.current

      if (!container) {
        return
      }

      const rect = container.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }

    globalThis.addEventListener('pointermove', handler)

    return (): void => {
      globalThis.removeEventListener('pointermove', handler)
    }
  }, [x, y])

  return (
    <div
      {..._props}
      ref={containerRef}
      className={cn('relative overflow-hidden', containerClassName)}
    >
      <motion.span
        aria-hidden
        className={cn(
          'absolute top-0 left-0 -translate-1/2 bg-radial via-transparent transition-opacity',
          glowClassName
        )}
        style={{
          translateX: x,
          translateY: y,
        }}
      />
      {children}
    </div>
  )
}
