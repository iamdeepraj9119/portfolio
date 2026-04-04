'use client';

import { useEffect, useRef } from 'react';

const FRAME_COUNT = 18;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener('resize', setSize);

    const images: HTMLImageElement[] = [];

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

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.body.scrollHeight - window.innerHeight;

      const progress = scrollTop / maxScroll;
      const frame = Math.floor(progress * (FRAME_COUNT - 1));

      render(frame);
    };

    window.addEventListener('scroll', handleScroll);

    images[0].onload = () => render(0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}