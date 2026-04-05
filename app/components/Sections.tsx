"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Cell } from "recharts";
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
<motion.section
  id="skills"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-4xl font-bold mb-10">Skills</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Data Analysis */}
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent
      backdrop-blur-xl border border-white/10
      hover:scale-105 transition-all duration-300
      hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
    ">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        📊 <span>Data Analysis</span>
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        Python, Pandas, NumPy, SQL
      </p>
    </div>

    {/* Data Visualization */}
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent
      backdrop-blur-xl border border-white/10
      hover:scale-105 transition-all duration-300
      hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
    ">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        📈 <span>Data Visualization</span>
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        Power BI, Interactive Dashboards
      </p>
    </div>

    {/* Digital Marketing */}
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-transparent
      backdrop-blur-xl border border-white/10
      hover:scale-105 transition-all duration-300
      hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
    ">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        📢 <span>Digital Marketing</span>
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        SEO, Google Analytics, Social Media Marketing
      </p>
    </div>

  </div>
</motion.section>

        {/* SKILLS CHART */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-4xl font-bold mb-8">Skills Overview</h2>

  <div className="
    h-96 p-6 rounded-3xl 
    bg-gradient-to-br from-white/10 to-white/5 
    backdrop-blur-xl border border-white/10
    shadow-[0_0_40px_rgba(59,130,246,0.15)]
  ">

    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>

        {/* 🔥 GRADIENT COLORS */}
        <defs>
          <linearGradient id="gradient0" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* AXIS */}
        <XAxis 
          dataKey="name" 
          stroke="#aaa" 
          tick={{ fill: "#ccc", fontSize: 14 }}
        />

        <YAxis 
          stroke="#aaa" 
          tick={{ fill: "#ccc", fontSize: 12 }}
        />

        {/* TOOLTIP */}
        <Tooltip
          contentStyle={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "10px",
            color: "#fff"
          }}
        />

        {/* 🔥 GRADIENT BARS */}
        <Bar 
          dataKey="value" 
          radius={[12, 12, 0, 0]}
          animationDuration={1200}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={`url(#gradient${index})`} 
            />
          ))}
        </Bar>

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