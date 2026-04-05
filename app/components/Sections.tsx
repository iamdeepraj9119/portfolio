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
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <Image
            src="/profile.jpg"
            alt="profile"
            width={140}
            height={140}
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
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-300 text-sm">Python, Pandas, SQL</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-300 text-sm">Power BI, Dashboards</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-300 text-sm">SEO, Analytics</p>
            </div>

          </div>
        </section>

        {/* SKILLS CHART */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Skills Overview</h2>

          <div className="h-96 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />

                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={index} fill="#3b82f6" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">HR Analytics</h3>
              <p className="text-gray-400 text-sm mb-4">Employee insights</p>

              <a href="#" className="block text-center py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                View
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
            href="mailto:your@email.com"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
          >
            Email Me
          </a>
        </section>

      </div>
    </div>
  );
}