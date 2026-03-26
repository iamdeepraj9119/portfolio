'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [80, -80]);

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

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              Deepraj Srivastav
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-blue-400 font-semibold mt-3">
              Data Analyst | Digital Marketing
            </p>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-3">
              Python • SQL • Excel • Power BI <br className="hidden sm:block" />
              SEO • Google Analytics • Social Media Marketing
            </p>

            {/* 🔥 FIXED CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 pointer-events-auto">

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition text-sm sm:text-base"
              >
                View Projects
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:scale-105 transition text-sm sm:text-base text-white"
              >
                Contact Me
              </a>

            </div>

          </div>
        </motion.div>

        {/* 🔥 SKILLS */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-24"
        >
          <div className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl text-white max-w-[90vw] sm:max-w-xl">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4">
              Skills & Experience
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <li>📊 Python, Pandas, NumPy, SQL</li>
              <li>📈 Power BI, Dashboards</li>
              <li>💻 Django Intern – Digipodium</li>
              <li>⚙️ Backend Development</li>
              <li>🧠 Problem Solving</li>
            </ul>

          </div>
        </motion.div>

        {/* 🔥 PROJECTS */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-center md:justify-end px-4 md:px-24"
        >
          <div className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl text-white max-w-[90vw] sm:max-w-xl md:text-right">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-4">
              Projects
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
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