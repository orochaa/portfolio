import { cn } from '@/lib/utils'
import type { Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback } from 'react'

export interface MailIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
}

const rectVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
}

export function MailIcon({
  className,
  size = 28,
  ...props
}: MailIconProps): React.JSX.Element {
  const pathControls = useAnimation()
  const rectControls = useAnimation()

  const handleMouseEnter = useCallback(async () => {
    rectControls.start('animate')
    pathControls.start('animate')
  }, [pathControls, rectControls])

  const handleMouseLeave = useCallback(() => {
    rectControls.start('normal')
    pathControls.start('normal')
  }, [pathControls, rectControls])

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-mail"
        aria-hidden="true"
      >
        <motion.rect
          variants={rectVariants}
          initial="normal"
          animate={rectControls}
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
        />
        <motion.path
          variants={pathVariants}
          initial="normal"
          animate={pathControls}
          d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        />
      </svg>
    </div>
  )
}
