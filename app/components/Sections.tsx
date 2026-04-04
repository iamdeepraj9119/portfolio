'use client';

import CertificateGallery from './CertificateGallery';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-20 space-y-20 text-white">

      {/* 🔥 HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative">

        {/* Background */}
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10">
          
          {/* 👇 PROFILE IMAGE */}
          <img
            src="/cert1.jpg"
            alt="profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
          />

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

      {/* ================= ABOUT ================= */}
      <section id="about" className="scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          About
        </h2>

        <div className="relative group max-w-3xl">
          <div className="absolute -inset-1 bg-gradient-to-r 
          from-blue-500 via-purple-500 to-pink-500 
          rounded-2xl blur opacity-30"></div>

          <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <p className="text-gray-300 leading-relaxed">
              I am an aspiring Data Analyst currently pursuing MCA in Data Analytics. 
              I have strong skills in Python, SQL, Excel, and Power BI. 

              Along with data analytics, I also have knowledge of Digital Marketing, including SEO, Google Analytics, and Social Media Marketing. 

              I enjoy transforming raw data into meaningful insights and dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Data Analysis",
            "Data Visualization",
            "Digital Marketing",
            "Social Media Marketing",
            "Development",
            "Problem Solving",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/10"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-white/10">
            <h3 className="font-bold">HR Data Analytics</h3>
            <p>Employee attrition analysis using Excel & Python</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10">
            <h3 className="font-bold">E-Commerce Dashboard</h3>
            <p>Power BI dashboard for business insights</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10">
            <h3 className="font-bold">CodeSweep</h3>
            <p>Django tool to remove unused code</p>
          </div>

        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <CertificateGallery />

    </div>
  );
}