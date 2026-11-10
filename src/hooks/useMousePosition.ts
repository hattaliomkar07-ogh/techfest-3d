import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentNormX = 0;
    let currentNormY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        targetX = event.touches[0].clientX;
        targetY = event.touches[0].clientY;
      }
    };

    const updateSmooth = () => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      const destNormX = (targetX / width) * 2 - 1;
      const destNormY = -(targetY / height) * 2 + 1;

      // Smooth interpolation (lerp)
      currentNormX += (destNormX - currentNormX) * 0.08;
      currentNormY += (destNormY - currentNormY) * 0.08;

      setMousePosition({
        x: targetX,
        y: targetY,
        normalizedX: currentNormX,
        normalizedY: currentNormY,
      });

      animationFrameId = requestAnimationFrame(updateSmooth);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateSmooth);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePosition;
}

