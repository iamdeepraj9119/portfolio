'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 18;

const getFramePath = (index: number) => {
  const formattedIndex = index.toString().padStart(2, '0');
  return `/sequence/frame_${formattedIndex}_delay-0.066s.png`;
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

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let count = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        count++;
        if (count === FRAME_COUNT) setLoaded(true);
      };

      imgs.push(img);
    }

    setImages(imgs);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const render = (i: number) => {
      const img = images[Math.floor(i)];
      if (!img) return;

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(frameIndex.get());
    };

    resize();
    window.addEventListener('resize', resize);

    const unsub = frameIndex.on('change', (v) => render(v));

    return () => {
      window.removeEventListener('resize', resize);
      unsub();
    };
  }, [loaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <canvas ref={canvasRef} className="w-full h-full" />

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <p className="text-white/50">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}'use client';

import { useEffect, useRef } from 'react';

const FRAME_COUNT = 18;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = [];

    // ✅ LOAD IMAGES (IMPORTANT FIX)
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const num = i.toString().padStart(2, '0');
      img.src = `/sequence/frame_${num}_delay-0.066s.png`;
      images.push(img);
    }

    const render = (index: number) => {
      const img = images[index];
      if (!img || !img.complete) return;

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // ✅ SCROLL CONTROL
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.body.scrollHeight - window.innerHeight;

      const progress = scrollTop / maxScroll;
      const frame = Math.floor(progress * (FRAME_COUNT - 1));

      render(frame);
    };

    window.addEventListener('scroll', handleScroll);

    // first frame
    images[0].onload = () => render(0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}