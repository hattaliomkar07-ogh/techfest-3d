import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function OrbitalRings() {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);
  const node1Ref = useRef<THREE.Mesh>(null);
  const node2Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.28;
      ring1Ref.current.rotation.x += delta * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.24;
      ring2Ref.current.rotation.z += delta * 0.16;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.18;
      ring3Ref.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Primary Gyro Ring */}
      <group ref={ring1Ref} rotation={[0.4, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[2.2, 0.022, 16, 100]} />
          <meshStandardMaterial
            color="#2864FF"
            emissive="#2864FF"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
        {/* Orbiting Satellite Node */}
        <mesh ref={node1Ref} position={[2.2, 0, 0]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshBasicMaterial color="#36C5F0" />
        </mesh>
      </group>

      {/* Secondary Counter-Rotating Ring */}
      <group ref={ring2Ref} rotation={[-0.5, 0.6, 0.8]}>
        <mesh>
          <torusGeometry args={[2.7, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#7957FF"
            emissive="#7957FF"
            emissiveIntensity={0.25}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh ref={node2Ref} position={[-2.7, 0, 0]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshBasicMaterial color="#FF826E" />
        </mesh>
      </group>

      {/* Tertiary Outer Delicate Ring */}
      <group ref={ring3Ref} rotation={[1.1, -0.3, 0.4]}>
        <mesh>
          <torusGeometry args={[3.2, 0.014, 16, 120]} />
          <meshPhysicalMaterial
            color="#EAF5FF"
            transmission={0.6}
            roughness={0.1}
            metalness={0.3}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      </group>
    </group>
  );
}
