import { useEffect, useRef } from "react"
import T, { Engine, Scene, useTrinity, useScene } from "t5y"
import { BoxBufferGeometry, PerspectiveCamera, Scene as ThreeScene } from "three"

const Stuff = () => {
  const geometryRef = useRef<BoxBufferGeometry>(null)
  const cameraRef = useRef<PerspectiveCamera>(null)

  const { triggerFrame } = useTrinity()
  const { setCamera } = useScene()

  useEffect(() => {
    cameraRef.current?.lookAt(0, 0, 0)
    setCamera(cameraRef.current!)

    triggerFrame()
  })

  return (
    <>
      <T.AmbientLight intensity={1} />
      <T.PerspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
      <T.Mesh>
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
