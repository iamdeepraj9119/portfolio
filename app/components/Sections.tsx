"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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

      <Navbar />

      {/* 🔥 FIXED SPACING */}
      <div className="px-4 md:px-20 pt-28 pb-16 space-y-20">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[90vh] flex items-center justify-center text-center relative"
        >

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0f] to-blue-900/20"></div>

          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-6 md:px-10 py-10 shadow-xl w-full max-w-2xl">

            {/* shine */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shine_6s_linear_infinite]"></div>
            </div>

            <div className="mb-6 flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Deepraj"
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-500"
              />
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-3">
              Deepraj Srivastav
            </h1>

            <p className="text-blue-400 text-lg md:text-xl mb-2">
              Data Analyst | Digital Marketing
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-6">
              Python • SQL • Excel • Power BI <br />
              SEO • Google Analytics • Social Media Marketing
            </p>

            {/* 🔥 3 BUTTONS */}
            <div className="flex flex-wrap gap-3 justify-center">

              <a
                href="#projects"
                className="px-5 py-2 bg-white text-black rounded-lg"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
              >
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/iamdeepraj9119/"
                target="_blank"
                className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10"
              >
                LinkedIn
              </a>

            </div>
          </div>
        </motion.section>

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>

          <div className="max-w-3xl p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-gray-300 text-sm md:text-base">
              I am an aspiring Data Analyst currently pursuing MCA in Data Analytics.
              I have strong skills in Python, SQL, Excel, and Power BI.
            </p>
          </div>
        </section>

        {/* SKILLS OVERVIEW */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills Overview
          </h2>

          <div className="w-full max-w-4xl mx-auto h-[250px] md:h-80 p-4 rounded-2xl bg-white/5 border border-white/10">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>

                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis stroke="#aaa" />

                <Tooltip />

                <Bar
                  dataKey="value"
                  radius={[8, 8, 0, 0]}
                  fill="url(#barGradient)"
                />

              </BarChart>
            </ResponsiveContainer>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3>HR Data Analytics</h3>
              <a href="https://github.com/iamdeepraj9119/HR-DATA-ANALYTICS" target="_blank">
                View
              </a>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3>E-Commerce Dashboard</h3>
              <a href="https://github.com/iamdeepraj9119/E-Commerce-Sales-Dashboard-Power-BI" target="_blank">
                View
              </a>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3>CodeSweep</h3>
              <a href="https://github.com/iamdeepraj9119/Code-Sweep-Project" target="_blank">
                View
              </a>
            </div>

          </div>
        </section>

        <CertificateGallery />

        {/* CONTACT */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>

          <div className="flex gap-4 justify-center">

            <a href="mailto:deeprajsrivastav935@gmail.com">📧</a>

            <a href="https://www.linkedin.com/in/iamdeepraj9119/" target="_blank">💼</a>

          </div>
        </section>

      </div>
    </div>
  );
}