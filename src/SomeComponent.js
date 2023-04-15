import { useRef } from "react"
import { useOutsideClick } from "./useOutsideClick"

function SomeComponent({ isOpen, close }) {
  const ref = useRef(null)
  useOutsideClick(isOpen, close, ref)

  return (
    <> {/* isOpen && ... works only if Fragment is present */}
      {isOpen && <p ref={ref}>SomeComponent qweqw qwe w qw...</p>}
    </>
  )
}

export default SomeComponent