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
{ name: "SEO", value: 90 },
{ name: "Google Ads (PPC)", value: 88 },
{ name: "Meta Ads", value: 85 },
{ name: "Google Analytics", value: 92 },
];

export default function Sections() {
return (
<div className="bg-black text-white">

  <Navbar />  

  <div className="px-6 md:px-20 pt-32 pb-20 space-y-32">  

<motion.section
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
> 

  <div className="absolute inset-0 -z-20 bg-[#0a0a0f]"></div>  

  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0f] to-blue-900/20"></div>  

  <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>  

  <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-10 py-12 shadow-xl">  

<div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">  
  <div className="absolute -top-1/2 left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shine_6s_linear_infinite]"></div>  
</div>  

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

<h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">  
  Deepraj Srivastav  
</h1>  

<p className="text-blue-400 text-xl mb-3">  
  Digital Marketing | Data Analytics
</p>  

<p className="text-gray-400 mb-6">  
Data-Driven Digital Marketing Executive  
SEO | Google Ads (PPC) | Meta Ads | Google Analytics | Performance Marketing 
</p>  

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

<section id="about">  
  <h2 className="text-4xl font-bold mb-6">About</h2>  

  <div className="max-w-3xl p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)]">  
    <p className="text-gray-200 leading-relaxed">  
      I am a data-driven Digital Marketing Executive specializing in SEO, Google Ads (PPC), Meta Ads, and Google Analytics. I have hands-on experience in planning, executing, and optimizing performance marketing campaigns to drive traffic, leads, and conversions.
With a strong foundation in Data Analytics, I use tools like Excel, SQL, and Power BI to analyze campaign performance, track KPIs, and generate actionable insights. I focus on improving ROI, optimizing ad strategies, and making data-driven decisions to achieve measurable business growth.  
    </p>  
  </div>  
</section>  

<section id="skills">
  <h2 className="text-4xl font-bold mb-10">Skills</h2>

  <div className="grid md:grid-cols-4 gap-8">

    {/* Card 1 */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 via-blue-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
      <h3 className="text-xl font-semibold mb-2">📢 Digital Marketing</h3>
      <p className="text-gray-300 text-sm">
        SEO, Google Ads (PPC), Meta Ads, Google Analytics, Performance Marketing
      </p>
    </div>

    {/* Card 2 */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
      <h3 className="text-xl font-semibold mb-2">📊 Data Analysis</h3>
      <p className="text-gray-300 text-sm">
        Python, Pandas, SQL
      </p>
    </div>

    {/* Card 3 */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
      <h3 className="text-xl font-semibold mb-2">📈 Data Visualization</h3>
      <p className="text-gray-300 text-sm">
        Power BI, Interactive Dashboards, Data Visualization
      </p>
    </div>

    {/* ✅ NEW CARD (Web Tools) */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 via-teal-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
      <h3 className="text-xl font-semibold mb-2">🌐 Web Tools</h3>
      <p className="text-gray-300 text-sm">
        WordPress (Website Development), Elementor (Page Builder)
      </p>
    </div>

  </div>
</section>

<section>  
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">  
    Skills Overview  
  </h2>  

  <div className="w-full max-w-5xl mx-auto h-[300px] md:h-96 p-4 md:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden">

    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl opacity-40"></div>

    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>

        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" stroke="#aaa" tick={{ fontSize: 10 }} />
        <YAxis stroke="#aaa" tick={{ fontSize: 10 }} />
        <Tooltip />

        <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="url(#barGradient)" />

      </BarChart>
    </ResponsiveContainer>

  </div>
</section>
<section id="tools">
  <h2 className="text-4xl font-bold mb-10">Tools Experience</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Google Ads */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
      <h3 className="text-xl font-semibold mb-2">📢 Google Ads</h3>
      <p className="text-gray-300 text-sm">
        Used for running PPC campaigns, keyword targeting, and optimizing conversions.
      </p>
    </div>

    {/* Meta Ads */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 via-red-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
      <h3 className="text-xl font-semibold mb-2">📱 Meta Ads Manager</h3>
      <p className="text-gray-300 text-sm">
        Used to create and manage Facebook & Instagram ads with audience targeting.
      </p>
    </div>

    {/* Google Analytics */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 via-teal-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
      <h3 className="text-xl font-semibold mb-2">📊 Google Analytics</h3>
      <p className="text-gray-300 text-sm">
        Used to track user behavior and measure campaign performance.
      </p>
    </div>

    {/* WordPress */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]">
      <h3 className="text-xl font-semibold mb-2">🌐 WordPress & Elementor</h3>
      <p className="text-gray-300 text-sm">
        Used to build landing pages and improve conversion rates.
      </p>
    </div>

    {/* Canva */}
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
      <h3 className="text-xl font-semibold mb-2">🎨 Canva</h3>
      <p className="text-gray-300 text-sm">
        Used to design ad creatives and social media content.
      </p>
    </div>

  </div>
</section>
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

<CertificateGallery />

<section id="contact" className="text-center mt-20 relative overflow-hidden">

  {/* Glow Background */}
  <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2 -z-10"></div>

  <h2 className="text-4xl font-bold mb-10">Connect Me</h2>

  <div className="flex flex-col items-center gap-6">

    {/* Github */}
    <a
      href="https://github.com/iamdeepraj9119"
      target="_blank"
      className="px-8 py-3 w-[260px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3"
    >
      {/* GitHub Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754 
        -1.09-.745.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998 
        .108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 
        0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 
        0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 
        1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23 
        .653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 
        0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.096.823 2.21 
        0 1.594-.015 2.877-.015 3.27 0 .32.216.694.825.576C20.565 
        21.795 24 17.296 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>

      Github
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/iamdeepraj9119/"
      target="_blank"
      className="px-8 py-3 w-[260px] rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3"
    >
      {/* LinkedIn Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 
        2.761 2.239 5 5 5h14c2.761 0 5-2.239 
        5-5V5c0-2.761-2.239-5-5-5zM7.12 
        20.452H3.56V9h3.56v11.452zM5.34 
        7.433c-1.138 0-2.06-.922-2.06-2.06 
        0-1.138.922-2.06 2.06-2.06 
        1.138 0 2.06.922 2.06 2.06 
        0 1.138-.922 2.06-2.06 
        2.06zm15.112 13.019h-3.558v-5.605c0-1.336-.025-3.057-1.865-3.057-1.867 
        0-2.154 1.459-2.154 2.965v5.697H9.316V9h3.415v1.561h.049c.476-.9 
        1.637-1.848 3.368-1.848 3.602 0 4.267 2.37 4.267 
        5.455v6.284z"/>
      </svg>

      LinkedIn
    </a>

    {/* Email */}
    <a
      href="mailto:deeprajsrivastav935@gmail.com"
      className="px-8 py-3 w-[260px] rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] flex items-center justify-center gap-3"
    >
      {/* Mail Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z"/>
        <path d="M4 4l8 8 8-8"/>
      </svg>

      Email Me
    </a>

  </div>
</section>
<footer className="text-center mt-20 text-gray-400 text-sm p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
  © 2026 Deepraj Srivastav. All Rights Reserved.
</footer>

  </div>
</div>
);
}