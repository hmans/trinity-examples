/**
 * The "Hello World" of Trinity!
 */

import Trinity, { Engine, Scene, useCamera, useEngine, useOnUpdate } from "@hmans/trinity"
import React, { useRef } from "react"

/**
 * Our main component spins up the Trinity Engine and creates a simple scene.
 */
export const HelloWorldExample = () => (
  <Engine>
    <Scene backgroundColor="white">
      {/**
       * The default export of the Trinity package transparently provides React components that
       * manage instaces of classes from the THREE.* namespace.
       */}
      <Trinity.AmbientLight intensity={0.3} />
      <Trinity.DirectionalLight intensity={0.8} position={[10, 10, 3]} />

      {/**
       * Here's some other stuff we're including in the scene. Since is this just plain old
       * React, we can use components to give structure to our application.
       */}
      <Camera />
      <SimpleRotatingCube />
    </Scene>
  </Engine>
)

/**
 * Our Camera component creates a perspective camera (using THREE.PerspectiveCamera)
 * and registers it as the scene's active camera through the `useCamera` hook.
 */
const Camera = () => {
  const cameraRef = useRef()

  useCamera(cameraRef)

  return <Trinity.PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
}

/**
 * Here's a simple component implementing a cube that is automatically rotating.
 */
const SimpleRotatingCube = () => {
  /* Whenever we want to imperatively modify scene objects, we can just use
  normal React refs. */
  const ref = useRef()

  /* The `useEngine` hook gives us access to some engine-specific objects.
  Here, we're getting a reference to the `triggerFrame` function which we're going
  to be using below. */
  const { triggerFrame } = useEngine()

  /* Trinity provides a collection of hooks that allow us to define game loop
  callbacks. The most common is `useOnUpdate`, which registers a function that will
  be executed on every engine tick. */
  useOnUpdate((dt) => {
    /* The update callbacks receive the current deltatime (the fraction of a second since
    the last tick) as their first and only argument. We can use this to smooth out
    animations and make them framerate independent. */
    ref.current.rotation.x = ref.current.rotation.y += dt

    /* Unlike other frameworks, Trinity will never automatically render a frame
    unless you ask it to. This is what the `triggerFrame` function is for; if any
    of the useOnUpdate callbacks invoke it, Trinity will render a frame in this tick. */
    triggerFrame()
  })

  /* Here's our actual mesh. Once again, we're just using the Trinity default export
  to wrap THREE.* classes in React components. */
  return (
    <Trinity.Mesh ref={ref}>
      <Trinity.BoxBufferGeometry args={[2, 2, 2]} />
      <Trinity.MeshStandardMaterial color="hotpink" />
    </Trinity.Mesh>
  )
}
