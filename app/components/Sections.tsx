'use client';

import CertificateGallery from './CertificateGallery';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-20 space-y-20">

      {/* ================= ABOUT ================= */}
      <section id="about" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-white mb-4">About</h2>
        <p className="text-gray-400 max-w-2xl">
          I am a Data Analyst skilled in Python, SQL, Excel, and Power BI.
          I also have knowledge of Digital Marketing including SEO,
          Google Analytics and Social Media Marketing.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Data Analysis", desc: "Python, Pandas, NumPy, SQL", icon: "📊" },
            { title: "Data Visualization", desc: "Power BI, Dashboards", icon: "📈" },
            { title: "Digital Marketing", desc: "SEO, Google Analytics", icon: "📢" },
            { title: "Social Media Marketing", desc: "Content Strategy, Growth", icon: "📱" },
            { title: "Development", desc: "Django, Backend APIs", icon: "💻" },
            { title: "Soft Skills", desc: "Problem Solving", icon: "🧠" },
          ].map((skill, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-60"></div>
              <div className="relative bg-white/5 p-6 rounded-2xl">
                <h3 className="text-white">{skill.icon} {skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
      </section>

      {/* ================= CONTACT (FIXED) ================= */}
      <section id="contact" className="scroll-mt-24 text-center py-20 text-white">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-4">
          Feel free to reach out 🚀
        </p>

        <a
          href="mailto:deeprajsrivastav935@gmail.com"
          className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Email Me
        </a>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <CertificateGallery />

    </div>
  );
}