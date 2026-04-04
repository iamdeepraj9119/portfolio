'use client';

import { motion } from 'framer-motion';

export default function Sections() {
  return (
    <div className="relative z-10 px-6 md:px-20 py-20 space-y-32">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center">

        <div className="bg-black/40 backdrop-blur-xl px-10 py-6 rounded-2xl border border-white/10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Deepraj Srivastav
          </h1>

          <p className="text-blue-400 text-lg mb-2">
            Data Analyst | Digital Marketing
          </p>

          <p className="text-white/70 mb-6">
            Python • SQL • Excel • Power BI <br />
            SEO • Google Analytics • Social Media Marketing
          </p>

          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-6 py-2 bg-white text-black rounded-lg">
              View Projects
            </a>

            <a href="/contact" className="px-6 py-2 bg-blue-500 rounded-lg">
              Contact Me
            </a>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="space-y-6">
        <h2 className="text-4xl font-bold">About</h2>

        <div className="bg-white/5 p-6 rounded-xl max-w-2xl">
          <p className="text-gray-300">
            I am an aspiring Data Analyst skilled in Python, SQL, Excel, and Power BI.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="space-y-6">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Python", "SQL", "Power BI"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 rounded-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-6">
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="font-bold">HR Data Analytics</h3>
            <p>Excel & Python</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="font-bold">E-Commerce Dashboard</h3>
            <p>Power BI</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="font-bold">CodeSweep</h3>
            <p>Django Project</p>
          </div>

        </div>
      </section>

    </div>
  );
}