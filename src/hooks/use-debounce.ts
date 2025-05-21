/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

/**
 * Debounce a function call.
 * Debounce means that the function will only be called after a certain amount of time has passed since the last call.
 *
 * This is useful for things like search inputs, where you don't want to make a request on every keystroke.
 *
 * @example
 * ```tsx
 * const debouncedSearch = useDebounce((value: string) => {
 *  console.log('Searching for', value)
 * }, 300)
 *
 * <input type="text" onChange={(e) => debouncedSearch(e.target.value)} />
 *```
 *
 * @param callback The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced function.
 */
export function useDebounce<TCallback extends (...args: any[]) => unknown>(
  callback: TCallback,
  delay: number
): (...args: Parameters<TCallback>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (...args: Parameters<TCallback>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )
}
