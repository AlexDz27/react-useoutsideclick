import { useState } from "react"
import SomeComponent from "./SomeComponent"

function AnotherApproach() {
  const [isSomeComponentOpen, setIsSomeComponentOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsSomeComponentOpen(!isSomeComponentOpen)}>Click me</button>
      <SomeComponent
        isOpen={isSomeComponentOpen}
        close={() => setIsSomeComponentOpen(false)}
      />
    </>
  )
}

export default AnotherApproach