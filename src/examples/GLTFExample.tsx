import T, {
  Engine,
  Scene,
  useCamera,
  useEngine,
  useGLTF,
  Primitive,
  useOnUpdate
} from "@hmans/trinity"
import React, { Suspense, useRef } from "react"
import { PerspectiveCamera, Scene as ThreeScene } from "three"

const Camera = () => {
  const cameraRef = useRef<PerspectiveCamera>(null)
  useCamera(cameraRef, (c) => c.lookAt(0, 0, 0))

  return <T.PerspectiveCamera ref={cameraRef} position={[0, 0, 35]} />
}

const Lights = () => {
  return (
    <>
      <T.AmbientLight intensity={0.3} />
      <T.DirectionalLight intensity={0.8} position={[10, 10, 3]} />
    </>
  )
}

const Spaceship = () => {
  const gltf = useGLTF("/models/spaceship.gltf")
  const { triggerFrame } = useEngine()

  useOnUpdate((dt) => {
    gltf.scene.rotation.y += 0.3 * dt
    triggerFrame()
  })

  return <Primitive object={gltf.scene} />
}

export const GLTFExample = () => {
  const sceneRef = useRef<ThreeScene>(null)

  return (
    <Engine>
      <Scene ref={sceneRef} backgroundColor="white">
        <Suspense fallback={null}>
          <Camera />
          <Lights />
          <Spaceship />
        </Suspense>
      </Scene>
    </Engine>
  )
}
