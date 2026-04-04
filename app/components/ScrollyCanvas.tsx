'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 74;

// ✅ NO /sequence/ (IMPORTANT FIX)
const getFramePath = (index: number) => {
  const i = (index + 1).toString().padStart(2, '0');
  return `/frame_${i}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  // 🔥 PRELOAD IMAGES
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        count++;
        if (count === FRAME_COUNT) setLoaded(true);
      };

      img.onerror = () => {
        console.log('❌ Missing:', img.src);
        count++;
        if (count === FRAME_COUNT) setLoaded(true);
      };

      imgs.push(img);
    }

    setImages(imgs);
  }, []);

  // 🔥 RENDER
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const render = (index: number) => {
      const img = images[Math.floor(index)];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const unsubscribe = frameIndex.on('change', (latest) => {
      render(latest);
    });

    render(0);

    return () => unsubscribe();
  }, [loaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[300vh] w-full">

      {/* ✅ FIXED BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* 🔥 LOADING */}
      {!loaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <p className="text-white animate-pulse">Loading...</p>
        </div>
      )}
    </div>
  );
}