'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // HERO
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // SKILLS (LEFT)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [80, -80]);

  // PROJECTS (RIGHT)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.7, 0.9, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 1], [80, -80]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-[500vh] w-full pointer-events-none z-10"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* 🔥 HERO */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div className="bg-black/30 px-8 py-6 rounded-2xl backdrop-blur-lg shadow-xl">

            {/* ✅ UPDATED HEADING */}
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Deepraj Srivastav
            </h1>

            <h2 className="text-2xl md:text-3xl text-blue-400 mt-3">
              Data Analyst
            </h2>

            <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
              Python • SQL • Excel • Power BI
            </p>

          </div>
        </motion.div>

        {/* 🔥 SKILLS LEFT */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-6 md:px-24"
        >
          <div className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-white max-w-xl">

            <h2 className="text-4xl font-bold text-blue-400 mb-6">
              Skills & Experience
            </h2>

            <ul className="space-y-3 text-lg text-gray-300">
              <li>📊 Python, Pandas, NumPy, SQL</li>
              <li>📈 Power BI, Dashboards</li>
              <li>💻 Django Intern – Digipodium</li>
              <li>⚙️ Backend Development</li>
              <li>🧠 Problem Solving</li>
            </ul>

          </div>
        </motion.div>

        {/* 🔥 PROJECTS RIGHT */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end px-6 md:px-24"
        >
          <div className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-white max-w-xl text-right">

            <h2 className="text-4xl font-bold text-green-400 mb-6">
              Projects
            </h2>

            <ul className="space-y-3 text-lg text-gray-300">
              <li>📊 HR Data Analytics</li>
              <li>📈 E-Commerce Dashboard</li>
              <li>🧠 CodeSweep (Django)</li>
            </ul>

          </div>
        </motion.div>

      </div>
    </div>
  );
}