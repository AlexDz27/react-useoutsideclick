import { useEffect, useRef, useState } from 'react'

function useOutsideClick() {
  const [isShown, setIsShown] = useState(false)
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (!componentRef.current.contains(e.target)) setIsShown(false)
    }

    if (isShown) {
      setTimeout(() => window.addEventListener('click', handleClick), 0)
    }
    return () => window.removeEventListener('click', handleClick)
  }, [isShown])

  return {isShown, setIsShown, componentRef}
}

function Ava() {
  const {isShown, setIsShown, componentRef} = useOutsideClick()

  return (
    <div>
      {isShown ? <p ref={componentRef}><b>popup</b></p> : null}
      <p onClick={() => setIsShown(true)}>ava</p>
    </div>
  );
}

export default Ava;
