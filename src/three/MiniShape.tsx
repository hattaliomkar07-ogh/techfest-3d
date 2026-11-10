import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MiniShapeMeshProps {
  shapeType: 'torus' | 'octahedron' | 'icosahedron' | 'tetrahedron' | 'sphere';
  color: string;
  isHovered: boolean;
}

function ShapeGeometry({ shapeType, color, isHovered }: MiniShapeMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const speed = isHovered ? 1.6 : 0.6;
      meshRef.current.rotation.x += delta * speed * 0.7;
      meshRef.current.rotation.y += delta * speed;
    }
    if (wireRef.current) {
      const speed = isHovered ? 1.6 : 0.6;
      wireRef.current.rotation.x += delta * speed * 0.7;
      wireRef.current.rotation.y += delta * speed;
    }
  });

  const renderGeometry = () => {
    switch (shapeType) {
      case 'torus':
        return <torusGeometry args={[0.9, 0.35, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1.2, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1.1, 0]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1.3, 0]} />;
      case 'sphere':
      default:
        return <sphereGeometry args={[1.0, 32, 32]} />;
    }
  };

  return (
    <group>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 2]} intensity={2.0} />
      <pointLight position={[-2, -2, 2]} intensity={1.5} color={color} />

      <mesh ref={meshRef}>
        {renderGeometry()}
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isHovered ? 0.45 : 0.2}
          roughness={0.15}
          metalness={0.3}
          transmission={0.8}
          thickness={1.2}
          clearcoat={1.0}
          transparent
          opacity={0.9}
        />
      </mesh>

      <lineSegments ref={wireRef}>
        <wireframeGeometry
          args={[
            shapeType === 'torus'
              ? new THREE.TorusGeometry(0.9, 0.35, 16, 32)
              : shapeType === 'octahedron'
              ? new THREE.OctahedronGeometry(1.2, 0)
              : shapeType === 'icosahedron'
              ? new THREE.IcosahedronGeometry(1.1, 0)
              : shapeType === 'tetrahedron'
              ? new THREE.TetrahedronGeometry(1.3, 0)
              : new THREE.SphereGeometry(1.0, 16, 16),
          ]}
        />
        <lineBasicMaterial color="#FFFFFF" transparent opacity={isHovered ? 0.7 : 0.35} />
      </lineSegments>
    </group>
  );
}

export function MiniShapeCanvas({
  shapeType,
  color,
  isHovered,
}: MiniShapeMeshProps) {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ShapeGeometry shapeType={shapeType} color={color} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}

