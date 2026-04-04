'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

// ⚠️ IMPORTANT: जितनी images हैं उतनी count रखो
const FRAME_COUNT = 18; 

// ✅ FIXED PATH (sequence add किया)
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
    [0, FRAME_COUNT - 1],
    { clamp: true }
  );

  // 🔄 preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

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
        console.warn(`Image not loaded: ${img.src}`);
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  // 🎨 draw canvas
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderFrame = (index: number) => {
      const safeIndex = Math.min(
        Math.max(Math.floor(index), 0),
        FRAME_COUNT - 1
      );

      const img = images[safeIndex];
      if (!img || !img.complete) return;

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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const unsubscribe = frameIndex.on('change', (latest) => {
      renderFrame(latest);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      unsubscribe();
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <p className="text-white/50 animate-pulse">
              LOADING...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}