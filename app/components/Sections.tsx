"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Cell } from "recharts";
import CertificateGallery from "./CertificateGallery";
import Navbar from "./Navbar";

// Charts (SSR fix)
const BarChart = dynamic(() => import("recharts").then((m) => m.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then((m) => m.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((m) => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((m) => m.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((m) => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((m) => m.ResponsiveContainer), { ssr: false });

const data = [
  { name: "SQL", value: 90 },
  { name: "Python", value: 85 },
  { name: "Excel", value: 95 },
  { name: "Power BI", value: 80 },
];

export default function Sections() {
  return (
    <div className="bg-black text-white">

      {/* ✅ NAVBAR */}
      <Navbar />

      <div className="px-6 md:px-20 pt-32 pb-20 space-y-32">

       {/* HERO */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
>

  {/* 🌌 BACKGROUND GRADIENT */}
  <div className="absolute inset-0 -z-20 bg-[#0a0a0f]"></div>

  {/* 🔥 GRADIENT LIGHT */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0f] to-blue-900/20"></div>

  {/* 💡 GLOW ORB */}
  <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>

  {/* 💎 GLASS CARD */}
  <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-10 py-12 shadow-xl">

    {/* ✨ GLASS REFLECTION EFFECT */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shine_6s_linear_infinite]"></div>
    </div>

    {/* PROFILE IMAGE */}
    <div className="relative mb-6 flex items-center justify-center">
      <div className="absolute w-40 h-40 bg-blue-500/30 blur-2xl rounded-full"></div>

      <Image
        src="/profile.jpg"
        alt="Deepraj"
        width={140}
        height={140}
        className="rounded-full border-4 border-blue-500 shadow-xl relative z-10 object-cover"
      />
    </div>

    {/* NAME */}
    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
      Deepraj Srivastav
    </h1>

    {/* TITLE */}
    <p className="text-blue-400 text-xl mb-3">
      Data Analyst | Digital Marketing
    </p>

    {/* SKILLS */}
    <p className="text-gray-400 mb-6">
      Python • SQL • Excel • Power BI <br />
      SEO • Google Analytics • Social Media Marketing
    </p>

    {/* BUTTONS */}
    <div className="flex gap-4 justify-center flex-wrap">

      <a
        href="#projects"
        className="px-6 py-2 bg-white text-black rounded-xl hover:scale-105 transition"
      >
        View Projects
      </a>

      <a
        href="/resume.pdf"
        download
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:opacity-90 transition hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      >
        Download Resume
      </a>

    </div>
  </div>
</motion.section>
        {/* ABOUT */}
<section id="about">
  <h2 className="text-4xl font-bold mb-6">About</h2>

  <div className="
    max-w-3xl p-6 rounded-2xl
    bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
    backdrop-blur-xl border border-white/10
    shadow-[0_0_40px_rgba(168,85,247,0.3)]
  ">
    <p className="text-gray-200 leading-relaxed">
      I am an aspiring Data Analyst currently pursuing MCA in Data Analytics.
      I have strong skills in Python, SQL, Excel, and Power BI. Along with data analytics,
      I also have knowledge of Digital Marketing including SEO, Google Analytics,
      and Social Media Marketing. I enjoy transforming raw data into meaningful insights.
    </p>
  </div>
</section>

{/* SKILLS */}
<section id="skills">
  <h2 className="text-4xl font-bold mb-10">Skills</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent
      backdrop-blur-xl border border-white/10
      hover:scale-105 transition-all duration-300
      hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
    ">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        📊 Data Analysis
      </h3>
      <p className="text-gray-300 text-sm">
        Python, Pandas, NumPy, SQL
      </p>
    </div>

    {/* Card 2 */}
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent
      backdrop-blur-xl border border-white/10
      hover:scale-105 transition-all duration-300
      hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
    ">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        📈 Data Visualization
      </h3>
      <p className="text-gray-300 text-sm">
        Power BI, Interactive Dashboards
      </p>
    </div>

    {/* Card 3 */}
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-transparent
      backdrop-blur-xl border border-white/10
      hover:scale-105 transition-all duration-300
      hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
    ">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        📢 Digital Marketing
      </h3>
      <p className="text-gray-300 text-sm">
        SEO, Google Analytics, Social Media Marketing
      </p>
    </div>

  </div>
</section>

        {/* SKILLS OVERVIEW */}
<section>
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
    Skills Overview
  </h2>

  <div className="w-full max-w-5xl mx-auto h-[300px] md:h-96 p-4 md:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl opacity-40"></div>

    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, left: -10, bottom: 20 }}
      >

        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="name"
          stroke="#aaa"
          tick={{ fontSize: 10 }}
        />

        <YAxis
          stroke="#aaa"
          tick={{ fontSize: 10 }}
        />

        <Tooltip
          contentStyle={{
            background: "rgba(0,0,0,0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            color: "#fff",
          }}
        />

        <Bar
          dataKey="value"
          radius={[10, 10, 0, 0]}
          fill="url(#barGradient)"
          animationDuration={1200}
        />

      </BarChart>
    </ResponsiveContainer>

  </div>
</section>
       {/* PROJECTS */}
<section id="projects">
  <h2 className="text-4xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2">HR Data Analytics</h3>
      <p className="text-gray-400 text-sm mb-6">
        Employee attrition analysis using Excel & Python
      </p>

      <a
        href="https://github.com/iamdeepraj9119/HR-DATA-ANALYTICS"
        target="_blank"
        className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
      >
        🔗 View Project
      </a>
    </div>

    {/* Project 2 */}
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2">E-Commerce Dashboard</h3>
      <p className="text-gray-400 text-sm mb-6">
        Power BI dashboard for business insights
      </p>

      <a
        href="https://github.com/iamdeepraj9119/E-Commerce-Sales-Dashboard-Power-BI"
        target="_blank"
        className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
      >
        🔗 View Project
      </a>
    </div>

    {/* Project 3 */}
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2">CodeSweep</h3>
      <p className="text-gray-400 text-sm mb-6">
        Django tool to remove unused code
      </p>

      <a
        href="https://github.com/iamdeepraj9119/Code-Sweep-Project"
        target="_blank"
        className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
      >
        🔗 View Project
      </a>
    </div>

  </div>
</section>

        {/* CERTIFICATES */}
        <CertificateGallery />

        {/* CONTACT */}
        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <a
            href="mailto:deeprajsrivastav935@email.com"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
          >
            Email Me
          </a>
        </section>

      </div>
    </div>
  );
}