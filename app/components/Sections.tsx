'use client';

import CertificateGallery from './CertificateGallery';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-20 space-y-20">

      {/* ================= ABOUT ================= */}
      <section id="about" className="scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-white">
          About
        </h2>

        <div className="relative group max-w-3xl">
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r 
          from-blue-500 via-purple-500 to-pink-500 
          rounded-2xl blur opacity-30"></div>

          {/* Content Box */}
          <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am an aspiring Data Analyst currently pursuing MCA in Data Analytics. 
              I have strong skills in Python, SQL, Excel, and Power BI. I enjoy transforming 
              raw data into meaningful insights and dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="scroll-mt-24">
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
              <div className="absolute -inset-1 bg-gradient-to-r 
              from-blue-500 via-purple-500 to-pink-500 
              rounded-xl blur opacity-20 group-hover:opacity-60 transition"></div>

              <div className="relative bg-white/5 border border-white/10 px-4 py-4 rounded-xl backdrop-blur-xl text-sm sm:text-base text-white">
                {tool}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section id="proof">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-white">
          Achievements & Proof
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Internship",
              desc: "💼 Django Web Development Intern – Digipodium (Code Sweep Project)",
            },
            {
              title: "Projects",
              desc: "📊 HR Analytics & E-commerce Dashboard with real datasets",
            },
            {
              title: "LinkedIn",
              desc: "🔗 Click to view my LinkedIn profile",
              link: "https://www.linkedin.com/in/iamdeepraj9119/",
            },
            {
              title: "Certifications",
              desc: `
📊 Google Data Analytics Certification  
📘 Career Essentials in Data Analysis (Microsoft + LinkedIn)  
📗 Introduction to Career Skills in Data Analytics (LinkedIn)  
💻 SQL (HackerRank Certified)  
🧠 AI & Data Science Certification
              `,
            },
            {
              title: "Digital Marketing",
              desc: "📈 SEO, Google Analytics & Social Media Marketing",
            },
            {
              title: "GitHub",
              desc: "🚀 Click to view my GitHub projects",
              link: "https://github.com/iamdeepraj9119",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link || "#"}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r 
              from-green-400 via-blue-500 to-purple-600 
              rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

              <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl h-full whitespace-pre-line">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <CertificateGallery />

    </div>
  );
}