import { cn } from '@/lib/utils/format'
import type { ReactNode } from 'react'

export interface TitleProps {
  children: ReactNode
  className?: string
}

export function Title(props: TitleProps): React.JSX.Element {
  return (
    <h1
      className={cn(
        'relative mt-12 mb-6 flex flex-col-reverse justify-between gap-1 pb-3 pl-3.5 text-2xl font-medium first:mt-0 sm:flex-row sm:items-center',
        'before:absolute before:left-0 before:h-4 before:w-1.5 before:rounded-lg before:bg-blue-400',
        Array.isArray(props.children) && props.children.length > 1
          ? 'before:bottom-[1.05rem] sm:before:bottom-5'
          : 'before:bottom-4',
        'after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-linear-to-r after:from-zinc-400 after:to-zinc-200',
        props.className
      )}
    >
      {props.children}
    </h1>
  )
}
