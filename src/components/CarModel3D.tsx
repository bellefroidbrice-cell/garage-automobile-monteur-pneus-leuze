import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type CarModel3DProps = {
  autoRotate?: boolean
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.28, 24]} />
        <meshStandardMaterial color="#111114" roughness={0.9} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.24, 0.24, 0.29, 6]} />
        <meshStandardMaterial color="#d9d9de" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

function CarBody() {
  return (
    <group>
      {/* lower chassis */}
      <mesh position={[0, 0.32, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.4, 1.8]} />
        <meshStandardMaterial color="#F6D300" metalness={0.4} roughness={0.35} />
      </mesh>

      {/* front splitter */}
      <mesh position={[2.15, 0.2, 0]}>
        <boxGeometry args={[0.25, 0.08, 1.9]} />
        <meshStandardMaterial color="#111114" roughness={0.6} />
      </mesh>

      {/* main cabin / greenhouse, tapered via scale */}
      <mesh position={[-0.15, 0.78, 0]} castShadow>
        <boxGeometry args={[2.6, 0.55, 1.55]} />
        <meshStandardMaterial color="#F6D300" metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[-0.2, 1.12, 0]} castShadow>
        <boxGeometry args={[1.6, 0.32, 1.3]} />
        <meshStandardMaterial color="#0d0d10" metalness={0.2} roughness={0.15} />
      </mesh>

      {/* front hood, sloping down */}
      <mesh position={[1.55, 0.58, 0]} rotation={[0, 0, -0.12]} castShadow>
        <boxGeometry args={[1.5, 0.28, 1.7]} />
        <meshStandardMaterial color="#F6D300" metalness={0.4} roughness={0.35} />
      </mesh>

      {/* rear haunch, wider */}
      <mesh position={[-1.65, 0.58, 0]} castShadow>
        <boxGeometry args={[1.3, 0.35, 1.95]} />
        <meshStandardMaterial color="#F6D300" metalness={0.4} roughness={0.35} />
      </mesh>

      {/* rear wing struts */}
      <mesh position={[-1.55, 0.95, 0.6]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#111114" />
      </mesh>
      <mesh position={[-1.55, 0.95, -0.6]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color="#111114" />
      </mesh>
      {/* rear wing plane */}
      <mesh position={[-1.55, 1.22, 0]} castShadow>
        <boxGeometry args={[0.55, 0.06, 1.7]} />
        <meshStandardMaterial color="#111114" roughness={0.4} />
      </mesh>

      {/* side mirrors */}
      <mesh position={[0.55, 0.92, 0.85]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color="#111114" />
      </mesh>
      <mesh position={[0.55, 0.92, -0.85]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color="#111114" />
      </mesh>

      <Wheel position={[1.35, 0.42, 0.95]} />
      <Wheel position={[1.35, 0.42, -0.95]} />
      <Wheel position={[-1.35, 0.42, 0.95]} />
      <Wheel position={[-1.35, 0.42, -0.95]} />
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
