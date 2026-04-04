'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 18; // 🔥 total images count (0–17)

const getFramePath = (index: number) => {
  const formattedIndex = index.toString().padStart(2, '0');
  return `/sequence/frame_${formattedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  // 🔥 preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };

      img.onerror = () => {
        console.log('Error loading:', img.src);
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };

      imgs.push(img);
    }

    setImages(imgs);
  }, []);

  // 🔥 draw image on canvas
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (index: number) => {
      const img = images[Math.floor(index)];
      if (!img) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const scale = Math.max(
        canvasWidth / img.width,
        canvasHeight / img.height
      );

      const x = (canvasWidth - img.width * scale) / 2;
      const y = (canvasHeight - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      );
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(frameIndex.get());
    };

    resize();
    window.addEventListener('resize', resize);

    const unsubscribe = frameIndex.on('change', (latest) => {
      render(latest);
    });

    return () => {
      window.removeEventListener('resize', resize);
      unsubscribe();
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <canvas ref={canvasRef} className="w-full h-full" />

        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <p className="text-white/50">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}