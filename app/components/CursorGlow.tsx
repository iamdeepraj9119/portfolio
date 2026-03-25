'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';

    Object.assign(glow.style, {
      position: 'fixed',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      pointerEvents: 'none',
      background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)',
      filter: 'blur(20px)',
      zIndex: '9999',
      transform: 'translate(-50%, -50%)',
      transition: 'transform 0.05s linear',
    });

    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);

  return null;
}