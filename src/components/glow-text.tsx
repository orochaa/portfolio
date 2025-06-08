import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export interface GlowTextProps {
  containerClassName?: string
  textClassName?: string
  glowClassName?: string
  children: ReactNode
}

export function GlowText(props: GlowTextProps): React.JSX.Element {
  return (
    <span className={cn('group/name relative', props.containerClassName)}>
      <span className={props.textClassName}>{props.children}</span>
      <span
        className={cn(
          'ease absolute bottom-0.5 left-0 w-0 overflow-hidden whitespace-nowrap text-cyan-400 transition-[width] duration-300 group-hover/name:w-full',
          props.glowClassName
        )}
        style={{
          filter: 'drop-shadow(0 0 23px oklch(78.9% 0.154 211.53)',
        }}
      >
        {props.children}
      </span>
    </span>
  )
}
