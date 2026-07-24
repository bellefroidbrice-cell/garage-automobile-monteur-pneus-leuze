import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

type CarModel3DProps = {
  autoRotate?: boolean
}

const BODY_COLOR = '#F6D300'
const DARK = '#111114'
const TUB_WIDTH = 1.55

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.28, 32]} />
        <meshStandardMaterial color={DARK} roughness={0.85} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.24, 0.24, 0.29, 6]} />
        <meshStandardMaterial color="#d9d9de" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

function useBodyGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape()
    // side profile: x = length (nose +, tail -), y = height from ground
    shape.moveTo(-2.05, 0.14)
    shape.bezierCurveTo(-2.15, 0.14, -2.22, 0.25, -2.1, 0.42)
    shape.bezierCurveTo(-1.95, 0.62, -1.6, 0.85, -1.05, 0.95)
    shape.bezierCurveTo(-0.75, 1.02, -0.1, 1.04, 0.25, 1.0)
    shape.bezierCurveTo(0.55, 0.95, 0.75, 0.78, 0.95, 0.62)
    shape.bezierCurveTo(1.25, 0.5, 1.65, 0.42, 1.95, 0.32)
    shape.bezierCurveTo(2.08, 0.26, 2.14, 0.2, 2.12, 0.14)
    shape.lineTo(-2.05, 0.14)

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: TUB_WIDTH,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 6,
      curveSegments: 24,
    })
    geometry.translate(0, 0, -TUB_WIDTH / 2)
    geometry.computeVertexNormals()
    return geometry
  }, [])
}

function CarBody() {
  const bodyGeometry = useBodyGeometry()

  return (
    <group>
      {/* main tub: continuous extruded profile (hood / roof / decklid) */}
      <mesh geometry={bodyGeometry} castShadow receiveShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </mesh>

      {/* cabin glass, inset over the roof */}
      <RoundedBox args={[1.15, 0.28, 1.25]} radius={0.06} smoothness={4} position={[-0.35, 0.86, 0]} castShadow>
        <meshStandardMaterial color={DARK} metalness={0.2} roughness={0.12} />
      </RoundedBox>

      {/* front fender flare, wider than the tub */}
      <RoundedBox args={[1.05, 0.42, 1.8]} radius={0.14} smoothness={4} position={[1.3, 0.32, 0]} castShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>

      {/* rear fender flare, widest point on a GT3 RS */}
      <RoundedBox args={[1.25, 0.46, 1.95]} radius={0.16} smoothness={4} position={[-1.55, 0.34, 0]} castShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>

      {/* front splitter */}
      <RoundedBox args={[0.28, 0.06, 1.85]} radius={0.015} smoothness={2} position={[2.05, 0.14, 0]}>
        <meshStandardMaterial color={DARK} roughness={0.6} />
      </RoundedBox>

      {/* rear wing struts */}
      <mesh position={[-1.5, 0.95, 0.55]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      <mesh position={[-1.5, 0.95, -0.55]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      {/* rear wing plane */}
      <RoundedBox args={[0.55, 0.06, 1.65]} radius={0.015} smoothness={2} position={[-1.5, 1.22, 0]} castShadow>
        <meshStandardMaterial color={DARK} roughness={0.4} />
      </RoundedBox>

      {/* side mirrors */}
      <mesh position={[0.5, 0.98, 0.82]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      <mesh position={[0.5, 0.98, -0.82]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color={DARK} />
      </mesh>

      <Wheel position={[1.3, 0.42, 0.95]} />
      <Wheel position={[1.3, 0.42, -0.95]} />
      <Wheel position={[-1.55, 0.42, 0.98]} />
      <Wheel position={[-1.55, 0.42, -0.98]} />
    </group>
  )
}

export default function CarModel3D({ autoRotate = true }: CarModel3DProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35
    }
  })

  return (
    <group ref={groupRef}>
      <CarBody />
    </group>
  )
}
