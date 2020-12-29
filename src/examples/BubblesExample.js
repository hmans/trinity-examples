import Trinity, { Engine, Scene, useCamera } from "@hmans/trinity"
import { useEngine, useOnUpdate } from "@hmans/trinity/engine/hooks"
import React, { useMemo, useRef } from "react"
import * as THREE from "three"

const dummy = new THREE.Object3D()

function Swarm({ count }) {
  const { triggerFrame } = useEngine()
  const mesh = useRef()

  const particles = useMemo(() => {
    const temp = []

    for (let i = 0; i < count; i++)
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() * 2,
        xFactor: -20 + Math.random() * 40,
        yFactor: -20 + Math.random() * 40,
        zFactor: -20 + Math.random() * 40,
        mx: 0,
        my: 0
      })

    return temp
  }, [count])

  useOnUpdate((dt) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle

      t = particle.t += (dt * speed) / 2

      const a = Math.cos(t) + Math.sin(t) * 0.1
      const b = Math.sin(t) + Math.cos(t * 2) * 0.1
      const s = Math.max(1.5, Math.cos(t) * 5)

      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      )

      dummy.scale.setScalar(s)
      dummy.updateMatrix()

      mesh.current.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true

    triggerFrame()
  })

  return (
    <>
      <Trinity.InstancedMesh ref={mesh} args={[null, null, count]} castShadow receiveShadow>
        <Trinity.SphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <Trinity.MeshPhongMaterial attach="material" color="#222" />
      </Trinity.InstancedMesh>
    </>
  )
}

const Camera = () => {
  const cameraRef = useRef()
  useCamera(cameraRef)
  return (
    <Trinity.PerspectiveCamera ref={cameraRef} position={[0, 0, 70]} near={10} far={150} fov={75} />
  )
}

export const BubblesExmaple = () => {
  return (
    <Engine>
      <Scene backgroundColor="#fec">
        <Camera />
        <Trinity.AmbientLight intensity={0.5} />
        <Trinity.PointLight position={[100, 100, 100]} intensity={1} castShadow />
        <Trinity.PointLight position={[-100, -100, -100]} intensity={2} color="orange" />
        <Swarm count={150} />
      </Scene>
    </Engine>
  )
}
