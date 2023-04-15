import { useEffect } from 'react'

export function useOutsideClick(isComponentOpen, closeComponent, componentRef) {
  useEffect(() => {
    function closeComponentIfClickedOutside(e) {
      if (!componentRef.current.contains(e.target)) closeComponent()
    }
    if (isComponentOpen) {
      setTimeout(() => document.addEventListener('click', closeComponentIfClickedOutside))
    }
    return () => document.removeEventListener('click', closeComponentIfClickedOutside)
  }, [isComponentOpen, closeComponent, componentRef])
}


/* TS version:

import { useEffect } from 'react'

export function useOutsideClick(
  isComponentOpen: boolean,
  closeComponent: () => void,
  componentRef: {current: null | HTMLElement},
) {
  useEffect(() => {
    function closeComponentIfClickedOutside(e: MouseEvent) {
      if (!componentRef.current!.contains(e.target as Node)) closeComponent()
    }
    if (isComponentOpen) {
      setTimeout(() => document.addEventListener('click', closeComponentIfClickedOutside))
    }
    return () => document.removeEventListener('click', closeComponentIfClickedOutside)
  }, [isComponentOpen, closeComponent, componentRef])
}


 */