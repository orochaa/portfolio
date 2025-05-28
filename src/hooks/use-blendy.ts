/* eslint-disable react-hooks/exhaustive-deps */
import type { Blendy as BlendyRef } from 'blendy'
import { createBlendy } from 'blendy'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export interface Blendy {
  id: string
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
  handleToggle: () => void
}

/**
 * /**
 * Hook to manage the state of a blendy component.
 * @param baseId The base id of the blendy component.
 * @link  https://blendy.tahazsh.com/
 */
export function useBlendy(baseId: string): Blendy {
  const blendy = useRef<BlendyRef | null>(null)

  const blendyId = useMemo((): string => {
    return `blendy-${baseId}`
  }, [baseId])

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = useCallback(() => {
    try {
      blendy.current?.toggle(blendyId)
    } catch {
      /* empty */
    }
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    try {
      blendy.current?.untoggle(blendyId, () => setIsOpen(false))
    } catch {
      setIsOpen(false)
    }
  }, [])

  const handleToggle = useCallback((): void => {
    isOpen ? handleClose() : handleOpen()
  }, [isOpen, handleOpen, handleClose])

  useEffect(() => {
    blendy.current = createBlendy({ animation: 'dynamic' })

    return (): void => {
      blendy.current = null
    }
  }, [])

  const result = useMemo(
    (): Blendy => ({
      id: blendyId,
      isOpen,
      handleOpen,
      handleClose,
      handleToggle,
    }),
    [blendyId, handleClose, handleOpen, handleToggle, isOpen]
  )

  return result
}
