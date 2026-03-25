'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Sections() {
  return (
    <div className="bg-[#121212] text-white px-4 sm:px-6 md:px-20 py-20 md:py-32 space-y-24 md:space-y-32">

      {/* ================= ABOUT ================= */}
      <section id="about">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
          About
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group max-w-3xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I am an aspiring Data Analyst currently pursuing MCA in Data Analytics.
              I have strong skills in Python, SQL, Excel, and Power BI.
              I enjoy transforming raw data into meaningful insights and dashboards.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {[
            {
              title: "Data Analysis",
              desc: "Python, Pandas, NumPy, SQL",
              icon: "📊",
            },
            {
              title: "Visualization",
              desc: "Power BI, Dashboards",
              icon: "📈",
            },
            {
              title: "Development",
              desc: "Django, Backend APIs",
              icon: "💻",
            },
            {
              title: "Soft Skills",
              desc: "Problem Solving, Analytical Thinking",
              icon: "🧠",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >

              {/* 🔥 GLOW EFFECT FOR ALL */}
              <div className="absolute -inset-1 bg-gradient-to-r 
              from-blue-500 via-purple-500 to-pink-500 
              rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

              <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {skill.icon} {skill.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {skill.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
          Contact
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group max-w-xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition"></div>

          <div className="relative bg-[#121212] border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Let's connect 🚀 — Feel free to reach out
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/iamdeepraj9119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/iamdeepraj9119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition duration-300 hover:scale-105 shadow-lg shadow-white/10"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              {/* Email */}
              <a
                href="mailto:deeprajsrivastav935@gmail.com"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-xl transition duration-300 hover:scale-105 shadow-lg"
              >
                <MdEmail size={18} />
                Email Me
              </a>

            </div>

            <p className="mt-4 text-gray-500 text-xs sm:text-sm break-all">
              Or mail me directly:
              <span className="text-white ml-1">
                deeprajsrivastav935@gmail.com
              </span>
            </p>

          </div>
        </motion.div>
      </section>

    </div>
  );
}