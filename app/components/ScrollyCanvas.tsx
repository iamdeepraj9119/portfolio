'use client';

import { useEffect, useRef } from 'react';

const FRAME_COUNT = 74;

const getFramePath = (index: number) => {
  const i = index.toString().padStart(2, '0');
  return `/sequence/frame_${i}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d')!;

    const images: HTMLImageElement[] = [];

    // 🔥 preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.push(img);
    }

    const render = (index: number) => {
      const img = images[index];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor((scrollTop / maxScroll) * FRAME_COUNT)
      );

      render(frameIndex);
    };

    images[0].onload = () => render(0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <div ref={containerRef} className="h-[300vh]">

      {/* 🔥 BACKGROUND FIX */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

    </div>
  );
}