import { useEffect, useState, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { HeroScene } from './HeroScene';

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Rendering Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface HeroCanvasProps {
  pointer: { x: number; y: number };
}

export function HeroCanvas({ pointer }: HeroCanvasProps) {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLAvailable(false);
      }
    } catch {
      setWebGLAvailable(false);
    }
  }, []);

  const fallback = (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      <div className="relative w-72 h-72 rounded-full border border-brand-blue/30 flex items-center justify-center animate-spin-slow shadow-glow-blue">
        <div className="w-48 h-48 rounded-full border border-brand-violet/40 animate-reverse-spin" />
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-brand-blue to-brand-violet opacity-80 blur-xl animate-pulse" />
      </div>
    </div>
  );

  if (!webGLAvailable) {
    return fallback;
  }

  return (
    <WebGLErrorBoundary fallback={fallback}>
      <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45, near: 0.1, far: 50 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          <HeroScene pointer={pointer} />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
