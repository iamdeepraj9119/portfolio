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

  // SKILLS
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [80, -80]);

  // PROJECTS
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
          <div className="bg-black/40 px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 rounded-2xl backdrop-blur-xl shadow-2xl max-w-[90vw] sm:max-w-xl">

            {/* NAME */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Deepraj Srivastav
            </h1>

            {/* ROLE */}
            <p className="text-base sm:text-lg md:text-2xl text-blue-400 font-semibold mt-3">
              Data Analyst | Digital Marketing
            </p>

            {/* SKILLS */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mt-3">
              Python • SQL • Excel • Power BI <br className="hidden sm:block" />
              SEO • Google Analytics • Social Media Marketing
            </p>

          </div>
        </motion.div>

        {/* 🔥 SKILLS LEFT */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-24"
        >
          <div className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl text-white max-w-[90vw] sm:max-w-xl">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 sm:mb-6">
              Skills & Experience
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-300">
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
          className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:px-24"
        >
          <div className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl text-white max-w-[90vw] sm:max-w-xl text-right">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-4 sm:mb-6">
              Projects
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-300">
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