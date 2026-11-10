import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

interface ScrollTransformSceneProps {
  progress: number; // 0 to 1 smooth progress from GSAP ScrollTrigger
}

export function ScrollTransformScene({ progress }: ScrollTransformSceneProps) {
  const outerTorusRef = useRef<THREE.Mesh>(null);
  const coreIcosaRef = useRef<THREE.Mesh>(null);
  const orbitalLatticeRef = useRef<THREE.Group>(null);
  const particleGroupRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotation driven by both time and scroll progress
    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.x = progress * Math.PI * 2 + time * 0.15;
      outerTorusRef.current.rotation.y = progress * Math.PI * 3 + time * 0.2;
      outerTorusRef.current.rotation.z = progress * Math.PI * 1.5;

      // Scale transition based on scroll progress
      const targetScale = 1.0 + Math.sin(progress * Math.PI) * 0.45;
      outerTorusRef.current.scale.set(targetScale, targetScale, targetScale);
    }

    if (coreIcosaRef.current) {
      coreIcosaRef.current.rotation.x = -progress * Math.PI * 2.5 - time * 0.3;
      coreIcosaRef.current.rotation.z = progress * Math.PI * 2 + time * 0.25;

      // Morphing scale based on progress
      const coreScale = 0.85 + progress * 0.5;
      coreIcosaRef.current.scale.set(coreScale, coreScale, coreScale);
    }

    if (orbitalLatticeRef.current) {
      orbitalLatticeRef.current.rotation.y = time * 0.25 + progress * Math.PI * 2;
      orbitalLatticeRef.current.rotation.x = Math.sin(time * 0.5) * 0.2 + progress * 0.8;
    }

    if (particleGroupRef.current) {
      // Particles swirl faster as progress increases
      particleGroupRef.current.rotation.y += delta * (0.1 + progress * 0.5);
      particleGroupRef.current.rotation.z += delta * (0.05 + progress * 0.2);
    }

    // Camera movement creates depth
    const camZ = 5.8 - progress * 1.8;
    const camY = Math.sin(progress * Math.PI) * 0.6;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, camZ, 0.08);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, camY, 0.08);
    state.camera.lookAt(0, 0, 0);
  });

  // Particle positions
  const particleCount = 450;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2 * 5;
    const radius = 1.6 + (i / particleCount) * 4.5;
    const ySpread = (Math.random() - 0.5) * 3;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = ySpread;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }

  return (
    <>
      <ambientLight intensity={1.0} color="#F8FAFC" />
      <directionalLight position={[5, 8, 5]} intensity={2.0} color="#FFFFFF" />
      <pointLight position={[-4, 3, 2]} intensity={2.5} color="#2864FF" />
      <pointLight position={[4, -3, 2]} intensity={2.5} color="#7957FF" />
      <pointLight position={[0, 0, -2]} intensity={1.8} color="#36C5F0" />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[0, 0, 0]}>
          {/* Transforming Outer Torus Knot */}
          <mesh ref={outerTorusRef}>
            <torusKnotGeometry args={[1.4, 0.35, 128, 32, 2, 3]} />
            <meshPhysicalMaterial
              color="#F1EDFF"
              emissive="#2864FF"
              emissiveIntensity={0.25}
              roughness={0.1}
              metalness={0.4}
              transmission={0.82}
              thickness={1.5}
              ior={1.5}
              clearcoat={1.0}
              transparent
              opacity={0.88}
            />
          </mesh>

          {/* Central Faceted Core */}
          <mesh ref={coreIcosaRef}>
            <dodecahedronGeometry args={[0.9, 0]} />
            <meshStandardMaterial
              color="#7957FF"
              emissive="#7957FF"
              emissiveIntensity={0.6 + progress * 0.8}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>

          {/* Orbital Satellite Ring Lattice */}
          <group ref={orbitalLatticeRef}>
            <mesh>
              <torusGeometry args={[2.6, 0.02, 16, 80]} />
              <meshStandardMaterial color="#36C5F0" emissive="#36C5F0" emissiveIntensity={0.4} metalness={0.9} />
            </mesh>
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[2.9, 0.015, 16, 80]} />
              <meshStandardMaterial color="#FF826E" emissive="#FF826E" emissiveIntensity={0.3} metalness={0.9} />
            </mesh>
          </group>

          {/* Spiral Particle Swarm */}
          <points ref={particleGroupRef}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
              size={0.055}
              color={progress > 0.5 ? "#7957FF" : "#2864FF"}
              transparent
              opacity={0.7}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </points>
        </group>
      </Float>
    </>
  );
}
