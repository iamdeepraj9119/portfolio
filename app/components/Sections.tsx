'use client';

import { motion } from 'framer-motion';

export default function Sections() {
  return (
    <div className="relative z-20 px-6 md:px-20 py-20 space-y-32">

      {/* 🔥 HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">

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

        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-white text-black rounded-lg">
            View Projects
          </a>

          <a href="#contact" className="px-6 py-2 bg-blue-500 rounded-lg">
            Contact Me
          </a>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about">
        <h2 className="text-4xl font-bold mb-6">About</h2>

        <p className="text-gray-300 max-w-2xl">
          I am an aspiring Data Analyst skilled in Python, SQL, Excel, and Power BI.
          I also have knowledge of Digital Marketing including SEO and Analytics.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Python", "SQL", "Power BI"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-md">
            <h3 className="font-bold">HR Data Analytics</h3>
            <p>Employee attrition using Excel & Python</p>
          </div>

          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-md">
            <h3 className="font-bold">E-Commerce Dashboard</h3>
            <p>Power BI dashboard</p>
          </div>

          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-md">
            <h3 className="font-bold">CodeSweep</h3>
            <p>Django project</p>
          </div>

        </div>
      </section>

    </div>
  );
}