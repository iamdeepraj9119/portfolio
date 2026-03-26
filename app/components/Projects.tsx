'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'HR Data Analytics',
    desc: 'Employee attrition analysis using Excel, Python & data visualization techniques.',
    link: 'https://github.com/iamdeepraj9119/HR-DATA-ANALYTICS',
  },
  {
    title: 'E-Commerce Dashboard',
    desc: 'Interactive Power BI dashboard to analyze sales, profit & business insights.',
    link: 'https://github.com/iamdeepraj9119/E-Commerce-Sales-Dashboard-Power-BI',
  },
  {
    title: 'CodeSweep',
    desc: 'Django-based tool to detect and remove unused code for cleaner projects.',
    link: 'https://github.com/iamdeepraj9119/Code-Sweep-Project',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-20 py-20 md:py-32 bg-[#121212] text-white"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col justify-between bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl overflow-hidden"
          >

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur transition"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base">
                {p.desc}
              </p>
            </div>

            {/* Button */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 hover:opacity-90 transition shadow-lg"
            >
              <FaGithub />
              View Project
            </a>

          </motion.div>
        ))}

      </div>
    </section>
  );
}