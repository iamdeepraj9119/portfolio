                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 75; // The prompt said up to roughly 89 frames, so 0-89 means 90 frames.

// Number format helper for images like frame_00_delay-0.067s.webp
const getFramePath = (index: number) => {
  const formattedIndex = index.toString().padStart(2, '0');
  return `/frame_${formattedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Scroll tracking on the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to the integer frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1], {
    clamp: true,
  });

  // 1. Preload all images on mount
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Create an Array to ensure order
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      // Provide a fallback in case image fails to load
      img.onerror = () => {
        console.warn(`Failed to preload frame ${i}: ${img.src}`);
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // 2. Draw to canvas logic
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle canvas sizing and object-fit: cover drawing
    const renderFrame = (index: number) => {
      // Ensure index is an integer safely within bounds
      const safeIndex = Math.min(Math.max(Math.floor(index), 0), FRAME_COUNT - 1);
      const img = images[safeIndex];
      // Only draw if image is complete and valid
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      // Calculate object-fit: cover dimensions
      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const scaledWidth = imgWidth * scale;
      const scaledHeight = imgHeight * scale;

      // Center the image
      const offsetX = (canvasWidth - scaledWidth) / 2;
      const offsetY = (canvasHeight - scaledHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
    };

    // Keep logical width/height sync'd with display size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    // Initial sizing
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Subscribe framer motion's transform to trigger re-renders
    const unsubscribe = frameIndex.on('change', (latestIndex) => {
      renderFrame(latestIndex);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      unsubscribe();
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Sticky container for the canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Loading overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <p className="text-white/50 text-sm tracking-widest animate-pulse">
              LOADING SEQUENCE...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
