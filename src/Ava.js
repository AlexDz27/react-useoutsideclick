import { useEffect, useRef, useState } from 'react'

function Ava() {
  const [isShown, setIsShown] = useState(false)
  const popRef = useRef(null)

  useEffect(() => {
    function qwe(e) {
      if (!popRef.current.contains(e.target)) setIsShown(false)
    }

    if (isShown) {
      setTimeout(() => window.addEventListener('click', qwe), 0)
    }
    return () => window.removeEventListener('click', qwe)
  }, [isShown])

  return (
    <div>
      {isShown ? <p ref={popRef}><b>popup</b></p> : null}
      <p onClick={() => setIsShown(true)}>ava</p>
      <button>qweqwe</button>
    </div>
  );
}

export default Ava;
