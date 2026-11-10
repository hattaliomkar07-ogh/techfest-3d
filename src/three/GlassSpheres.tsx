import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SphereData {
  initialPos: [number, number, number];
  size: number;
  speed: number;
  offset: number;
  type: 'glass' | 'chrome' | 'cyanGlow';
}

export function GlassSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = useMemo<SphereData[]>(() => [
    { initialPos: [-3.2, 1.8, -1.2], size: 0.32, speed: 1.1, offset: 0, type: 'glass' },
    { initialPos: [3.4, -1.2, -0.8], size: 0.28, speed: 0.9, offset: 2.1, type: 'chrome' },
    { initialPos: [-2.6, -1.9, 0.4], size: 0.22, speed: 1.3, offset: 4.2, type: 'cyanGlow' },
    { initialPos: [2.8, 2.1, 0.2], size: 0.36, speed: 0.8, offset: 1.4, type: 'glass' },
    { initialPos: [1.8, -2.4, -1.5], size: 0.18, speed: 1.4, offset: 3.3, type: 'chrome' },
    { initialPos: [-1.9, 2.6, -1.8], size: 0.24, speed: 1.0, offset: 5.0, type: 'glass' },
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    groupRef.current.children.forEach((child, index) => {
      const data = spheres[index];
      if (data) {
        child.position.y = data.initialPos[1] + Math.sin(time * data.speed + data.offset) * 0.22;
        child.position.x = data.initialPos[0] + Math.cos(time * 0.5 * data.speed + data.offset) * 0.08;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {spheres.map((s, index) => (
        <mesh key={index} position={s.initialPos}>
          <sphereGeometry args={[s.size, 32, 32]} />
          {s.type === 'glass' ? (
            <meshPhysicalMaterial
              roughness={0.05}
              transmission={0.9}
              thickness={1.1}
              ior={1.48}
              color="#F0F8FF"
              clearcoat={1.0}
              transparent
              opacity={0.92}
            />
          ) : s.type === 'chrome' ? (
            <meshStandardMaterial
              metalness={0.95}
              roughness={0.1}
              color="#CBD5E1"
            />
          ) : (
            <meshStandardMaterial
              color="#36C5F0"
              emissive="#36C5F0"
              emissiveIntensity={0.8}
              roughness={0.2}
            />
          )}
        </mesh>
      ))}
    </group>
  );
}
