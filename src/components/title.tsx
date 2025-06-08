import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export interface TitleProps extends ComponentProps<'h2'> {}

export function Title(props: TitleProps): React.JSX.Element {
  return (
    <h2
      {...props}
      className={cn(
        'relative mb-8 px-1 pb-3.5 text-4xl font-semibold',
        'after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-cyan-500',
        props.className
      )}
    >
      {props.children}
    </h2>
  )
}
