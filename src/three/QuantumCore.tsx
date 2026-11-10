import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface QuantumCoreProps {
  pointer: { x: number; y: number };
}

export function QuantumCore({ pointer }: QuantumCoreProps) {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      // Gentle floating levitation
      coreRef.current.position.y = Math.sin(time * 1.2) * 0.12;

      // Subtle tilt responsive to mouse
      const targetRotX = pointer.y * 0.35;
      const targetRotY = pointer.x * 0.45;

      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, targetRotX, 0.05);
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, targetRotY, 0.05);
    }

    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.22;
      outerRef.current.rotation.y += delta * 0.35;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.3;
      innerRef.current.rotation.z += delta * 0.4;
      const pulse = 0.92 + Math.sin(time * 2.5) * 0.08;
      innerRef.current.scale.set(pulse, pulse, pulse);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.15;
      wireframeRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0, 0]}>
      {/* Central Pulsating Energy Light */}
      <pointLight color="#7957FF" intensity={2.8} distance={6} decay={2} />
      <pointLight color="#2864FF" intensity={3.2} distance={8} decay={2} />

      {/* Outer Faceted Glass Polyhedron */}
      <mesh ref={outerRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshPhysicalMaterial
          roughness={0.08}
          transmission={0.88}
          thickness={1.4}
          ior={1.52}
          reflectivity={0.9}
          color="#EAF5FF"
          emissive="#2864FF"
          emissiveIntensity={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          metalness={0.05}
          transparent={true}
          opacity={0.95}
        />
      </mesh>

      {/* Wireframe Outline for High-Tech CAD/Architectural Feel */}
      <lineSegments ref={wireframeRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.36, 0)]} />
        <lineBasicMaterial color="#36C5F0" transparent opacity={0.65} linewidth={1.5} />
      </lineSegments>

      {/* Inner Glowing Crystal Octahedron */}
      <mesh ref={innerRef} scale={[0.7, 0.7, 0.7]}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#7957FF"
          emissive="#2864FF"
          emissiveIntensity={1.2}
          metalness={0.85}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Micro Core Singularity */}
      <mesh scale={[0.22, 0.22, 0.22]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}
