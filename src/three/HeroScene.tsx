import { Suspense } from 'react';
import { QuantumCore } from './QuantumCore';
import { OrbitalRings } from './OrbitalRings';
import { GlassSpheres } from './GlassSpheres';
import { FloatingParticles } from './FloatingParticles';
import { HeroCameraRig } from './HeroCameraRig';
import { Environment } from '@react-three/drei';

interface HeroSceneProps {
  pointer: { x: number; y: number };
}

export function HeroScene({ pointer }: HeroSceneProps) {
  return (
    <>
      {/* Lighting Setup designed for bright high-end theme */}
      <ambientLight intensity={1.2} color="#F8FAFC" />

      {/* Primary Key Light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={2.2}
        color="#FFFFFF"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Electric Blue Fill Light */}
      <directionalLight
        position={[-6, -4, 4]}
        intensity={1.5}
        color="#2864FF"
      />

      {/* Vibrant Violet Rim Light */}
      <pointLight
        position={[0, 4, -3]}
        intensity={2.8}
        color="#7957FF"
        distance={12}
      />

      {/* Cyan Under-Glow */}
      <pointLight
        position={[0, -4, 2]}
        intensity={2.0}
        color="#36C5F0"
        distance={10}
      />

      <Suspense fallback={null}>
        {/* Preset city/studio environment for reflections */}
        <Environment preset="city" environmentIntensity={0.65} />

        <group position={[0, 0, 0]}>
          <QuantumCore pointer={pointer} />
          <OrbitalRings />
          <GlassSpheres />
          <FloatingParticles count={650} />
        </group>
      </Suspense>

      <HeroCameraRig pointer={pointer} />
    </>
  );
}
