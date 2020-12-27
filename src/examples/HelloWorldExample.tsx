import T, { Engine, Scene, useCamera, useEngine, useOnUpdate } from "@hmans/trinity"
import React, { useRef } from "react"
import { Mesh, PerspectiveCamera, Scene as ThreeScene } from "three"

const Camera = () => {
  const cameraRef = useRef<PerspectiveCamera>(null)

  useCamera(cameraRef, (c) => c.lookAt(0, 0, 0))

  return <T.PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
}

const SimpleRotatingCube = () => {
  const meshRef = useRef<Mesh>(null)

  const { triggerFrame } = useEngine()

  useOnUpdate((dt) => {
    meshRef.current!.rotation.x = meshRef.current!.rotation.y += dt
    triggerFrame()
  })

  return (
    <>
      <T.Mesh ref={meshRef}>
        <T.BoxBufferGeometry args={[2, 2, 2]} />
        <T.MeshStandardMaterial color="hotpink" />
      </T.Mesh>
    </>
  )
}

export const HelloWorldExample = () => {
  const sceneRef = useRef<ThreeScene>(null)

  return (
    <Engine>
      <Scene ref={sceneRef} backgroundColor="white">
        <T.AmbientLight intensity={0.3} />
        <T.DirectionalLight intensity={0.8} position={[10, 10, 3]} />
        <Camera />
        <SimpleRotatingCube />
      </Scene>
    </Engine>
  )
}
