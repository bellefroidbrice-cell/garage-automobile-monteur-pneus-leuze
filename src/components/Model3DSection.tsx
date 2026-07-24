import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import CarModel3D from './CarModel3D.tsx'

export default function Model3DSection() {
  return (
    <section id="modele-3d" className="border-t border-white/10 bg-[#0B0B0D] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-normal tracking-tight text-white md:text-4xl">
          Modèle 3D
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm font-light text-white/50">
          Interprétation 3D stylisée, à titre illustratif — clic-glisser pour tourner autour du véhicule.
        </p>

        <div className="mx-auto mt-10 h-[420px] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:h-[520px]">
          <Canvas shadows camera={{ position: [6, 2.6, 6], fov: 35 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.7} />
              <directionalLight
                position={[5, 8, 5]}
                intensity={1.6}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <directionalLight position={[-6, 3, -4]} intensity={0.5} />
              <pointLight position={[0, 3, 4]} intensity={0.4} />
              <CarModel3D />
              <ContactShadows position={[0, 0, 0]} opacity={0.55} scale={10} blur={2} far={2} />
              <OrbitControls
                enablePan={false}
                minDistance={4}
                maxDistance={10}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2.1}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}
