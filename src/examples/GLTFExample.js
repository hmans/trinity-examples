import T, {
  Engine,
  Primitive,
  Scene,
  useCamera,
  useEngine,
  useGLTF,
  useOnUpdate
} from "@hmans/trinity"
import React, { Suspense, useRef } from "react"

const Camera = () => {
  const cameraRef = useRef()
  useCamera(cameraRef)
  return <T.PerspectiveCamera ref={cameraRef} position={[0, 0, 35]} />
}

const Spaceship = () => {
  /* The useGLTF hook loads the specified GLTF file. It uses React Suspense,
  do you don't need to handle the loading state yourself -- just pretend
  the loading happens synchronously. */
  const gltf = useGLTF("/models/spaceship.gltf")

  /* Automatically rotate the spaceship. */
  const { triggerFrame } = useEngine()

  useOnUpdate((dt) => {
    gltf.scene.rotation.y += 0.3 * dt
    triggerFrame()
  })

  /* The <Primitive> component allows us to inject any existing THREE object into
  the scene. We just need to pass it to its `object` property. */
  return <Primitive object={gltf.scene} />
}

/**
 * A tiny component that we will be displaying as a placeholder while the GLTF
 * file is still being loaded.
 */
const LoadingPlaceholder = () => (
  <T.Mesh>
    <T.DodecahedronBufferGeometry />
    <T.MeshStandardMaterial color="hotpink" />
  </T.Mesh>
)

export const GLTFExample = () => (
  <Engine>
    <Scene backgroundColor="#333">
      <T.AmbientLight intensity={0.3} />
      <T.DirectionalLight intensity={0.8} position={[10, 10, 3]} />
      <Camera />

      {/* Note how we're wrapping the spaceship in a <Suspense> component. */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <Spaceship />
      </Suspense>
    </Scene>
  </Engine>
)
