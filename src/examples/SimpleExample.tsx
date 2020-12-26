import T, { Engine, Scene, useCamera, useEngine, useOnUpdate } from "@hmans/trinity"
import { useRef } from "react"
import { BoxBufferGeometry, Mesh, PerspectiveCamera, Scene as ThreeScene } from "three"

const Stuff = () => {
  const geometryRef = useRef<BoxBufferGeometry>(null)
  const cameraRef = useRef<PerspectiveCamera>(null)
  const meshRef = useRef<Mesh>(null)

  const { triggerFrame } = useEngine()

  useCamera(cameraRef, (c) => c.lookAt(0, 0, 0))

  useOnUpdate((dt) => {
    meshRef.current!.rotation.x = meshRef.current!.rotation.y += dt
    triggerFrame()
  })

  return (
    <>
      <T.AmbientLight intensity={0.3} />
      <T.DirectionalLight intensity={0.8} position={[10, 10, 3]} />
      <T.PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
      <T.Mesh ref={meshRef}>
        <T.BoxBufferGeometry ref={geometryRef} args={[2, 2, 2]} />
        <T.MeshStandardMaterial color="hotpink" />
      </T.Mesh>
    </>
  )
}

export const SimpleExample = () => {
  const sceneRef = useRef<ThreeScene>(null)

  return (
    <Engine>
      <Scene ref={sceneRef} backgroundColor="white">
        <Stuff />
      </Scene>
    </Engine>
  )
}
