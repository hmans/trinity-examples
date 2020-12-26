import { useEffect, useRef } from "react"
import T, { Engine, Scene, useEngine, useOnUpdate, useScene } from "t5y"
import { BoxBufferGeometry, Mesh, PerspectiveCamera, Scene as ThreeScene } from "three"

const Stuff = () => {
  const geometryRef = useRef<BoxBufferGeometry>(null)
  const cameraRef = useRef<PerspectiveCamera>(null)
  const meshRef = useRef<Mesh>(null)

  const { triggerFrame } = useEngine()
  const { setCamera } = useScene()

  useEffect(() => {
    cameraRef.current?.lookAt(0, 0, 0)
    setCamera(cameraRef.current!)

    triggerFrame()
  })

  useOnUpdate((dt) => {
    meshRef.current!.rotation.x = meshRef.current!.rotation.y += dt
    triggerFrame()
  })

  return (
    <>
      <T.AmbientLight intensity={1} />
      <T.PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
      <T.Mesh ref={meshRef}>
        <T.BoxBufferGeometry ref={geometryRef} args={[2, 2, 2]} />
        <T.MeshBasicMaterial color="hotpink" />
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
