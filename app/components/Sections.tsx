"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Cell } from "recharts";
import Particles from "@tsparticles/react";
import CertificateGallery from "./CertificateGallery";
import Navbar from "./Navbar";

// charts
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
    <div className="bg-black text-white relative">

      {/* ✅ NAVBAR BACK */}
      <Navbar />

      {/* ✅ PARTICLES (NO ERROR) */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          particles: {
            number: { value: 40 },
            color: { value: "#3b82f6" },
            links: { enable: true, color: "#3b82f6", opacity: 0.3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            size: { value: 2 },
          },
        }}
      />

      <div className="px-6 md:px-20 pt-32 pb-20 space-y-32">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <Image src="/profile.jpg" alt="profile" width={140} height={140}
            className="rounded-full border-4 border-blue-500 mb-6" />

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Deepraj Srivastav
          </h1>

          <p className="text-blue-400 text-xl mb-3">
            Data Analyst | Digital Marketing
          </p>
        </section>

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-4xl font-bold mb-6">About</h2>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
            I am a Data Analyst skilled in Python, SQL, Excel & Power BI.
          </div>
        </section>

        {/* 🔥 SKILLS (GLASS BACK) */}
        <section id="skills">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Data Analysis", "Data Visualization", "Digital Marketing"].map((item) => (
              <div key={item}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition shadow-xl">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 PREMIUM CHART */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Skills Overview</h2>

          <div className="h-96 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />

                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {data.map((_, i) => (
                    <Cell key={i} fill="#3b82f6" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

          </div>
        </section>

        {/* 🔥 PROJECT FIX */}
        <section id="projects">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">HR Analytics</h3>
              <p className="text-gray-400 text-sm mb-4">Employee insights</p>

              <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                View
              </button>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <CertificateGallery />

        {/* 🔥 CONTACT CENTER FIX */}
        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
            Email Me
          </button>
        </section>

      </div>
    </div>
  );
}