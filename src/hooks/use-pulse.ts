import { useCallback, useRef, useState } from 'react'

interface PulseOptions {
  duration?: number
  onPulseStart?: () => void
  onPulseEnd?: () => void
}

/**
 * Hook to create a pulse effect.
 * Pulse means that the element will change its state for a short period of time.
 *
 * @example
 * ```tsx
 * const [isActive, pulse] = usePulse({
 *  duration: 3000,
 *  onPulseStart: () => console.log('Pulse started'),
 *  onPulseEnd: () => console.log('Pulse ended'),
 * })
 *
 * <button onClick={pulse}>Pulse</button>
 * ```
 *
 * @param options.duration The duration of the pulse in milliseconds.
 * @param options.onPulseStart Callback when the pulse starts.
 * @param options.onPulseEnd Callback when the pulse ends.
 * @returns isActive: boolean, pulse: () => void
 */
export function usePulse(
  options?: PulseOptions
): [isActive: boolean, pulse: () => void] {
  const [isActive, setIsActive] = useState<boolean>(false)
  const pulseRef = useRef<NodeJS.Timeout>(null)

  const pulse = useCallback(() => {
    const { duration = 3000, onPulseStart, onPulseEnd } = options ?? {}

    if (pulseRef.current) {
      clearTimeout(pulseRef.current)
    }

    onPulseStart?.()
    setIsActive(true)

    pulseRef.current = setTimeout(() => {
      setIsActive(false)
      onPulseEnd?.()
      pulseRef.current = null
    }, duration)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [isActive, pulse]
}
