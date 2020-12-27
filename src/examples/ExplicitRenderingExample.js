import Trinity, {
  Engine,
  Scene,
  useCamera,
  useEngine,
  useOnFrame,
  useOnUpdate
} from "@hmans/trinity"
import React, { useEffect, useRef } from "react"

/**
 * This scene contains a rotating cube that rotates a mesh on every engine tick.
 * Unlike the cube in the Hello World example, it doesn't trigger any frame
 * rendering, though.
 */
const SimpleRotatingCube = () => {
  const ref = useRef()

  useOnUpdate((dt) => {
    ref.current.rotation.x = ref.current.rotation.y += dt
  })

  return (
    <Trinity.Mesh ref={ref}>
      <Trinity.BoxBufferGeometry args={[2, 2, 2]} />
      <Trinity.MeshStandardMaterial color="hotpink" />
    </Trinity.Mesh>
  )
}

/**
 * Trinity will never render frames unless you explicitly tell it to, so just for
 * this example, let's have a non-rendering component that invokes `triggerFrame`
 * by way of `setInterval`.
 */
const RenderInterval = ({ seconds }) => {
  const { triggerFrame } = useEngine()

  useEffect(() => {
    const interval = setInterval(triggerFrame, seconds * 1000)
    return () => clearInterval(interval)
  })

  return null
}

/**
 * Just for some further proof that this is working, let's have a component
 * that renders something to the console every time a frame is rendered.
 * We can use Trinity's `useOnFrame` hook to achieve this. Unlike `useOnUpdate`,
 * which is called on every engine tick, `useOnFrame` is only called on engine
 * ticks that actually render a frame.
 */
const LogWhenRendered = () => {
  useOnFrame(() => {
    console.log("A frame was rendered!")
  })

  return null
}

const Camera = () => {
  const cameraRef = useRef()
  useCamera(cameraRef)
  return <Trinity.PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
}

export const ExplicitRenderingExample = () => (
  <Engine>
    <Scene backgroundColor="#ccd">
      <Trinity.AmbientLight intensity={0.3} />
      <Trinity.DirectionalLight intensity={0.8} position={[10, 10, 3]} />
      <Camera />
      <SimpleRotatingCube />
      <RenderInterval seconds={1} />
      <LogWhenRendered />
    </Scene>
  </Engine>
)
