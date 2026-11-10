import { Canvas } from '@react-three/fiber';
import { ScrollTransformScene } from './ScrollTransformScene';

interface ScrollTransformCanvasProps {
  progress: number;
}

export function ScrollTransformCanvas({ progress }: ScrollTransformCanvasProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full pointer-events-none"
      >
        <ScrollTransformScene progress={progress} />
      </Canvas>
    </div>
  );
}
