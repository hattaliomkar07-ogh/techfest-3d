import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HeroCameraRigProps {
  pointer: { x: number; y: number };
}

export function HeroCameraRig({ pointer }: HeroCameraRigProps) {
  const vec = useRef(new THREE.Vector3());

  useFrame((state) => {
    // Target camera position: base z = 6.2, responding subtly to mouse
    const targetX = pointer.x * 0.75;
    const targetY = pointer.y * 0.5;

    state.camera.position.lerp(
      vec.current.set(targetX, targetY, 6.2),
      0.04
    );

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
