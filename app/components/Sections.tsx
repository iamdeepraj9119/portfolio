'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-20 space-y-20">

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              title: "Data Analysis",
              desc: "Python, Pandas, NumPy, SQL",
              icon: "📊",
            },
            {
              title: "Data Visualization",
              desc: "Power BI, Interactive Dashboards",
              icon: "📈",
            },
            {
              title: "Digital Marketing",
              desc: "SEO, Google Analytics",
              icon: "📢",
            },
            {
              title: "Social Media Marketing",
              desc: "Content Strategy, Growth",
              icon: "📱",
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
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r 
              from-blue-500 via-purple-500 to-pink-500 
              rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

              <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl h-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
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

      {/* ================= TOOLS ================= */}
      <section id="tools">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-white">
          Tools & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

          {[
            "Python",
            "SQL",
            "Power BI",
            "Excel",
            "Google Analytics",
            "SEO",
            "Canva",
            "Meta Ads",
          ].map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group text-center"
            >

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r 
              from-blue-500 via-purple-500 to-pink-500 
              rounded-xl blur opacity-20 group-hover:opacity-60 transition"></div>

              {/* Card */}
              <div className="relative bg-white/5 border border-white/10 px-4 py-4 rounded-xl backdrop-blur-xl text-sm sm:text-base text-white">
                {tool}
              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}