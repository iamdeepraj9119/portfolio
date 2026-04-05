"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CertificateGallery from "./CertificateGallery";

// Recharts fix
const BarChart = dynamic(() => import("recharts").then(m => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then(m => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });

const data = [
  { name: "SQL", value: 90 },
  { name: "Python", value: 85 },
  { name: "Excel", value: 95 },
  { name: "Power BI", value: 80 },
];

export default function Sections() {
  return (
    <div className="bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full top-0 left-0 backdrop-blur-lg bg-white/10 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Deepraj</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </nav>

      <div className="px-6 md:px-20 pt-32 pb-20 space-y-32">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <Image
            src="/profile.jpg"
            alt="Deepraj"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500 shadow-lg mb-6"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Deepraj Srivastav
          </h1>

          <p className="text-blue-400 text-xl mb-3">
            Data Analyst | Digital Marketing
          </p>

          <p className="text-gray-400 mb-6 max-w-xl">
            Turning data into insights using Python, SQL, Excel & Power BI.
          </p>

          <a href="#projects" className="px-6 py-2 bg-white text-black rounded-xl hover:scale-105 transition">
            View Projects
          </a>
        </motion.section>

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-4xl font-bold mb-6">About</h2>

          <div className="max-w-3xl p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/10">
            <p className="text-gray-300">
              I am an aspiring Data Analyst skilled in Python, SQL, Excel, and Power BI.
              I also have knowledge of Digital Marketing including SEO and Analytics.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Data Analysis", "Data Visualization", "Digital Marketing"].map((skill) => (
              <div key={skill} className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg hover:scale-105 transition">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* CHART */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

       {/* PROJECTS */}
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-4xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Project 1 */}
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">
        HR Data Analytics
      </h3>

      <p className="text-gray-400 text-sm mb-6">
        Employee attrition analysis using Excel & Python
      </p>

      <a
        href="https://github.com/yourusername/hr-analytics"
        target="_blank"
        className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
      >
        🚀 View Project
      </a>
    </div>

    {/* Project 2 */}
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">
        E-Commerce Dashboard
      </h3>

      <p className="text-gray-400 text-sm mb-6">
        Power BI dashboard for business insights
      </p>

      <a
        href="https://github.com/yourusername/ecommerce-dashboard"
        target="_blank"
        className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
      >
        🚀 View Project
      </a>
    </div>

    {/* Project 3 */}
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">
        CodeSweep
      </h3>

      <p className="text-gray-400 text-sm mb-6">
        Django tool to remove unused code
      </p>

      <a
        href="https://github.com/yourusername/codesweep"
        target="_blank"
        className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
      >
        🚀 View Project
      </a>
    </div>

  </div>
</motion.section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10">
            Achievements & Proof
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Internship", "Certifications", "Projects", "Marketing", "LinkedIn", "GitHub"].map((item) => (
              <div key={item} className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg hover:scale-105 transition">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <CertificateGallery />

      </div>
    </div>
  );
}