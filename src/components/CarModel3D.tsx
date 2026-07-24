import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

type CarModel3DProps = {
  autoRotate?: boolean
}

const BODY_COLOR = '#F6D300'
const DARK = '#111114'

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

function CarBody() {
  return (
    <group>
      {/* lower chassis, spans full length so panels above have a seamless base */}
      <RoundedBox args={[4.3, 0.42, 1.85]} radius={0.07} smoothness={4} position={[0, 0.34, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>

      {/* front splitter */}
      <RoundedBox args={[0.3, 0.06, 1.9]} radius={0.015} smoothness={2} position={[2.15, 0.18, 0]}>
        <meshStandardMaterial color={DARK} roughness={0.6} />
      </RoundedBox>

      {/* front nose, tapering into the splitter */}
      <RoundedBox args={[1.7, 0.5, 1.62]} radius={0.09} smoothness={4} position={[1.65, 0.52, 0]} rotation={[0, 0, -0.16]} castShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>

      {/* mid section, overlaps nose and haunch to hide seams */}
      <RoundedBox args={[2.9, 0.5, 1.72]} radius={0.08} smoothness={4} position={[-0.05, 0.56, 0]} castShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>

      {/* cabin / greenhouse */}
      <RoundedBox args={[2.15, 0.5, 1.5]} radius={0.08} smoothness={4} position={[-0.2, 0.86, 0]} castShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>
      <RoundedBox args={[1.55, 0.34, 1.28]} radius={0.05} smoothness={4} position={[-0.25, 1.14, 0]} castShadow>
        <meshStandardMaterial color={DARK} metalness={0.2} roughness={0.12} />
      </RoundedBox>

      {/* rear haunch, wider than the cabin */}
      <RoundedBox args={[1.5, 0.52, 1.98]} radius={0.08} smoothness={4} position={[-1.65, 0.56, 0]} castShadow>
        <meshStandardMaterial color={BODY_COLOR} metalness={0.35} roughness={0.32} />
      </RoundedBox>

      {/* rear wing struts */}
      <mesh position={[-1.55, 0.95, 0.6]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      <mesh position={[-1.55, 0.95, -0.6]}>
        <boxGeometry args={[0.06, 0.5, 0.06]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      {/* rear wing plane */}
      <RoundedBox args={[0.55, 0.06, 1.7]} radius={0.015} smoothness={2} position={[-1.55, 1.22, 0]} castShadow>
        <meshStandardMaterial color={DARK} roughness={0.4} />
      </RoundedBox>

      {/* side mirrors */}
      <mesh position={[0.5, 0.98, 0.85]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      <mesh position={[0.5, 0.98, -0.85]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color={DARK} />
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
