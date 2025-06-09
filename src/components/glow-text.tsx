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
          'absolute bottom-0.5 left-0 w-0 overflow-hidden whitespace-nowrap text-cyan-400 drop-shadow-[0_0_1.25rem] drop-shadow-cyan-500/75 transition-[width] duration-300 ease-in-out group-hover/name:w-full',
          props.glowClassName
        )}
      >
        {props.children}
      </span>
    </span>
  )
}
