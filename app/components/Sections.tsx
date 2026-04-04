'use client';

import { motion } from 'framer-motion';

export default function Sections() {
  return (
    <div className="relative z-10 px-6 md:px-20 py-20 space-y-32">

      {/* ✅ ABOUT */}
      <section id="about">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <p className="text-gray-300 max-w-2xl">
          I am an aspiring Data Analyst skilled in Python, SQL, Excel, and Power BI.
          I also have knowledge of Digital Marketing including SEO and Analytics.
        </p>
      </section>

      {/* ✅ SKILLS */}
      <section id="skills">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Python", "SQL", "Power BI"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ PROJECTS */}
      <section id="projects">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="font-bold">HR Data Analytics</h3>
            <p>Employee attrition using Excel & Python</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="font-bold">E-Commerce Dashboard</h3>
            <p>Power BI dashboard</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="font-bold">CodeSweep</h3>
            <p>Django project</p>
          </div>

        </div>
      </section>

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