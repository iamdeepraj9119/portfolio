import React from 'react'; import { motion } from 'framer-motion'; import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [ { name: 'SQL', value: 90 }, { name: 'Python', value: 85 }, { name: 'Excel', value: 95 }, { name: 'Power BI', value: 80 } ];

export default function Sections() { return ( <div className="bg-black text-white scroll-smooth">

{/* NAVBAR */}
  <nav className="fixed w-full top-0 left-0 backdrop-blur-lg bg-white/10 border-b border-white/10 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Deepraj</h1>
      <div className="flex gap-6 text-sm">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <div className="px-6 md:px-20 pt-32 pb-20 space-y-32">

    {/* HERO */}
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Deepraj Srivastav
      </h1>

      <p className="text-blue-400 text-xl mb-3">
        Data Analyst
      </p>

      <p className="text-gray-400 mb-6 max-w-xl">
        Turning data into insights using Python, SQL, Excel & Power BI.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-2 bg-white text-black rounded-xl hover:scale-105 transition">
          View Projects
        </a>

        <a href="#contact" className="px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
          Contact Me
        </a>
      </div>
    </motion.section>

    {/* ABOUT */}
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <h2 className="text-4xl font-bold mb-4 border-b border-gray-700 pb-2">
        About Me
      </h2>

      <p className="text-gray-400">
        I am a passionate Data Analyst skilled in Python, SQL, Excel, and Power BI.
      </p>
    </motion.section>

    {/* SKILLS + CHART */}
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
        Skills Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>

    {/* PROJECTS */}
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "HR Data Analytics",
            link: "https://github.com/yourusername/hr-project"
          },
          {
            title: "E-Commerce Dashboard",
            link: "https://github.com/yourusername/ecommerce"
          },
          {
            title: "CodeSweep",
            link: "https://github.com/yourusername/codesweep"
          }
        ].map((project) => (
          <div key={project.title} className="p-6 bg-white/10 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <a href={project.link} target="_blank" className="text-blue-400 text-sm">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </motion.section>

    {/* CONTACT */}
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
        Contact
      </h2>

      <a href="mailto:your@email.com" className="px-6 py-2 bg-blue-500 rounded-xl">
        Email Me
      </a>
    </motion.section>

  </div>
</div>

); }