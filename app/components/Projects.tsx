'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'HR Data Analytics',
    desc: 'Employee attrition analysis using Excel & Python',
  },
  {
    title: 'E-Commerce Dashboard',
    desc: 'Power BI dashboard for business insights',
  },
  {
    title: 'CodeSweep',
    desc: 'Django tool to remove unused code',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-32 bg-[#121212] text-white">

      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-white/5 border border-white/10 p-6 rounded-2xl overflow-hidden"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition"></div>

            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}