"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import CertificateGallery from "./CertificateGallery";
import Navbar from "./Navbar";

// =====================================================
// REAL VECTOR ICONS
// =====================================================

import {
  FiAward,
  FiX,
  FiMail,
  FiLinkedin,
  FiArrowRight,
  FiExternalLink,
  FiBarChart2,
  FiSearch,
  FiTarget,
  FiUsers,
  FiFileText,
  FiVideo,
  FiTrendingUp,
  FiSend,
  FiCheckCircle,
  FiGlobe,
  FiMonitor,
  FiEdit3,
  FiDatabase,
  FiCpu,
  FiSettings,
  FiPieChart,
} from "react-icons/fi";

// =====================================================
// CHARTS - SSR FIX
// =====================================================

const BarChart = dynamic(
  () => import("recharts").then((m) => m.BarChart),
  { ssr: false }
);

const Bar = dynamic(
  () => import("recharts").then((m) => m.Bar),
  { ssr: false }
);

const XAxis = dynamic(
  () => import("recharts").then((m) => m.XAxis),
  { ssr: false }
);

const YAxis = dynamic(
  () => import("recharts").then((m) => m.YAxis),
  { ssr: false }
);

const Tooltip = dynamic(
  () => import("recharts").then((m) => m.Tooltip),
  { ssr: false }
);

const ResponsiveContainer = dynamic(
  () => import("recharts").then((m) => m.ResponsiveContainer),
  { ssr: false }
);

// =====================================================
// SKILLS DATA
// =====================================================

const data = [
  { name: "SEO", value: 90 },
  { name: "Google Ads", value: 85 },
  { name: "Meta Ads", value: 82 },
  { name: "Analytics", value: 88 },
  { name: "Excel", value: 95 },
  { name: "Power BI", value: 80 },
];

// =====================================================
// FOCUS AREAS
// =====================================================

const focusAreas = [
  {
    icon: <FiSearch />,
    title: "SEO & Organic Growth",
    description:
      "Improving website visibility, search rankings and organic growth.",
  },
  {
    icon: <FiTarget />,
    title: "Google Ads",
    description:
      "Creating and optimizing targeted paid campaigns.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Meta Ads",
    description:
      "Running targeted campaigns focused on engagement and conversions.",
  },
  {
    icon: <FiUsers />,
    title: "Social Media Marketing",
    description:
      "Building brand presence and growing audiences organically.",
  },
  {
    icon: <FiFileText />,
    title: "Content Strategy",
    description:
      "Planning content that attracts, engages and converts.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Performance Marketing",
    description:
      "Using data and campaign insights to improve marketing performance.",
  },
  {
    icon: <FiVideo />,
    title: "Video Editing & Reels",
    description:
      "Creating engaging short-form videos and promotional content.",
  },
  {
    icon: <FiUsers />,
    title: "Lead Generation",
    description:
      "Generating quality leads through digital marketing campaigns.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Analytics & Reporting",
    description:
      "Tracking performance and turning data into useful decisions.",
  },
];

// =====================================================
// TOOLS - REAL VECTOR ICONS
// =====================================================

const tools = [
  {
    name: "Google Analytics",
    icon: FiBarChart2,
    iconClass: "text-orange-400",
  },
  {
    name: "Google Search Console",
    icon: FiSearch,
    iconClass: "text-blue-400",
  },
  {
    name: "Google Ads",
    icon: FiTarget,
    iconClass: "text-blue-400",
  },
  {
    name: "Meta Business Suite",
    icon: FiUsers,
    iconClass: "text-blue-500",
  },
  {
    name: "Canva",
    icon: FiEdit3,
    iconClass: "text-cyan-400",
  },
  {
    name: "Adobe Premiere Pro",
    icon: FiVideo,
    iconClass: "text-purple-400",
  },
  {
    name: "Filmora",
    icon: FiVideo,
    iconClass: "text-cyan-400",
  },
  {
    name: "Microsoft Excel",
    icon: FiDatabase,
    iconClass: "text-green-400",
  },
  {
    name: "WordPress",
    icon: FiGlobe,
    iconClass: "text-blue-400",
  },
  {
    name: "ChatGPT",
    icon: FiCpu,
    iconClass: "text-white",
  },
  {
    name: "Google Keyword Planner",
    icon: FiSearch,
    iconClass: "text-blue-400",
  },
  {
    name: "SEMrush",
    icon: FiTrendingUp,
    iconClass: "text-orange-400",
  },
  {
    name: "Ahrefs",
    icon: FiBarChart2,
    iconClass: "text-red-400",
  },
  {
    name: "Ubersuggest",
    icon: FiSearch,
    iconClass: "text-orange-400",
  },
  {
    name: "Google Tag Manager",
    icon: FiSettings,
    iconClass: "text-blue-400",
  },
];

// =====================================================
// SERVICES
// =====================================================

const services = [
  {
    number: "01",
    title: "SEO & Organic Growth",
    description:
      "Data-driven SEO strategies designed to improve search visibility, organic traffic and long-term brand growth.",
    points: [
      "Keyword Research & Strategy",
      "On-Page & Technical SEO",
      "Local SEO & Content Optimization",
    ],
  },
  {
    number: "02",
    title: "Performance & Social Marketing",
    description:
      "Targeted digital campaigns that connect brands with the right audience and drive measurable results.",
    points: [
      "Google Ads & Meta Ads",
      "Social Media Management",
      "Content Strategy & Analytics",
    ],
  },
  {
    number: "03",
    title: "Content & Video Production",
    description:
      "Creative digital content designed to capture attention, strengthen brand identity and increase audience engagement.",
    points: [
      "Short-Form Reels & Videos",
      "Video Editing & Motion Graphics",
      "Social Media Creatives & Content",
    ],
  },
];

// =====================================================
// EXPERTISE
// =====================================================

const expertise = [
  {
    icon: <FiSearch />,
    title: "SEO",
    description:
      "Improving website visibility and search engine rankings.",
  },
  {
    icon: <FiTarget />,
    title: "Google Ads",
    description:
      "Creating and managing high-converting ad campaigns.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Meta Ads",
    description:
      "Running targeted ads that drive engagement and sales.",
  },
  {
    icon: <FiUsers />,
    title: "Social Media Marketing",
    description:
      "Building brand presence and growing audiences organically.",
  },
  {
    icon: <FiFileText />,
    title: "Content Strategy",
    description:
      "Planning content that attracts, engages and converts.",
  },
  {
    icon: <FiEdit3 />,
    title: "Content Creation",
    description:
      "Creating engaging posts, captions and marketing content.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Analytics & Reporting",
    description:
      "Tracking performance and making data-driven decisions.",
  },
  {
    icon: <FiUsers />,
    title: "Lead Generation",
    description:
      "Generating quality leads and improving conversion opportunities.",
  },
  {
    icon: <FiSend />,
    title: "Email Marketing",
    description:
      "Building campaigns that nurture and convert audiences.",
  },
  {
    icon: <FiVideo />,
    title: "Video Editing",
    description:
      "Editing engaging videos, reels and promotional content.",
  },
];

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function Sections() {
  const [showCertificates, setShowCertificates] = useState(false);

  // ===================================================
  // GMAIL CONTACT FORM
  // ===================================================

  const handleContactSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("Name") || "");
    const email = String(formData.get("Email") || "");
    const projectType = String(
      formData.get("Project Type") || ""
    );
    const budget = String(
      formData.get("Estimated Budget") || ""
    );
    const details = String(
      formData.get("Project Details") || ""
    );

    const subject = encodeURIComponent(
      `Portfolio Inquiry - ${
        projectType || "Digital Marketing"
      }`
    );

    const body = encodeURIComponent(
      `Hello Deepraj,

I would like to discuss a project with you.

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Estimated Budget: ${budget}

Project Details:
${details}

Regards,
${name}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=deeprajsrivastav935@gmail.com` +
      `&su=${subject}` +
      `&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      <div className="px-6 md:px-20 pt-32 pb-20 space-y-32">

        {/* =================================================
            HERO
        ================================================= */}

        <motion.section
          id="home"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
        >

          <div className="absolute inset-0 -z-20 bg-[#0a0a0f]" />

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0f] to-blue-900/20" />

          <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2" />

          <div className="relative max-w-4xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-8 md:px-12 py-12 shadow-xl">

            {/* SHINE */}

            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">

              <div className="absolute -top-1/2 left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shine_6s_linear_infinite]" />

            </div>

            {/* PROFILE */}

            <div className="relative mb-6 flex items-center justify-center">

              <div className="absolute w-40 h-40 bg-blue-500/30 blur-2xl rounded-full" />

              <Image
                src="/profile.jpg"
                alt="Deepraj Srivastav"
                width={140}
                height={140}
                priority
                className="rounded-full border-4 border-blue-500 shadow-xl relative z-10 object-cover"
              />

            </div>

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Digital Growth • Data • Technology
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
              Deepraj Srivastav
            </h1>

            {/* UPDATED HERO POSITIONING */}

            <p className="text-blue-400 text-xl md:text-2xl mb-4">
              AI-Powered Digital Marketing Specialist | SEO | Performance Marketing | Analytics
            </p>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              AI-powered Digital Marketing professional focused on SEO,
              Performance Marketing, Marketing Analytics, and data-driven
              strategies that help businesses improve visibility, reach the
              right audience, and drive measurable growth.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">

              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition font-semibold"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:opacity-90 transition hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] font-semibold"
              >
                Download Resume
              </a>

            </div>

          </div>

        </motion.section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="scroll-mt-28"
        >

          <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
            Who I Am
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About{" "}
            <span className="text-blue-400">
              Me
            </span>
          </h2>

          <div className="max-w-4xl p-8 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]">

            {/* UPDATED ABOUT ME */}

            <p className="text-gray-200 leading-relaxed text-lg">
              I am a Digital Marketing professional building my career as an
              AI-Powered Digital Marketing Specialist, with a strong focus on
              SEO, Performance Marketing, Marketing Analytics, and data-driven
              growth. I work with SEO, Google Ads, Meta Ads, Google Analytics,
              Social Media Marketing, and AI-powered marketing tools to build
              smarter and more effective digital strategies.
            </p>

            <p className="text-gray-400 leading-relaxed mt-5">
              My approach combines AI, SEO, performance marketing, analytics,
              and technology to understand search behavior, measure campaign
              performance, identify growth opportunities, and turn data into
              actionable marketing strategies that deliver measurable
              business results.
            </p>

          </div>

        </section>

        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          id="services"
          className="scroll-mt-28"
        >

          <div className="text-center mb-12">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
              What I Do
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Built for{" "}
              <span className="text-blue-400">
                Digital Growth
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {services.map((service) => (
              <motion.div
                key={service.number}
                whileHover={{ y: -8 }}
                className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300"
              >

                <div className="text-4xl font-bold text-blue-400 mb-8">
                  {service.number}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">

                  {service.points.map((point) => (
                    <p
                      key={point}
                      className="text-gray-200 text-sm flex items-center"
                    >

                      <FiCheckCircle
                        className="mr-2 text-blue-400 flex-shrink-0"
                      />

                      {point}

                    </p>
                  ))}

                </div>

              </motion.div>
            ))}

          </div>

        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="scroll-mt-28"
        >

          <div className="text-center mb-12">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
              What I Do Best
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Skills &{" "}
              <span className="text-purple-400">
                Expertise
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5">
              A blend of creative strategies, data-driven insights and modern
              tools to help brands grow and make better decisions.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {expertise.map((skill) => (
              <motion.div
                key={skill.title}
                whileHover={{ scale: 1.04 }}
                className="p-5 min-h-[170px] rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all"
              >

                <div className="text-3xl mb-4 text-blue-400">
                  {skill.icon}
                </div>

                <h3 className="font-bold text-lg mb-2">
                  {skill.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        {/* =================================================
            TOOLS
        ================================================= */}

        <section
          id="tools"
          className="scroll-mt-28"
        >

          <div className="text-center mb-12">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
              My Toolkit
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Tools{" "}
              <span className="text-purple-400">
                I Use
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5">
              Professional tools I use across SEO, digital marketing,
              analytics, content and performance marketing.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

            {tools.map((tool) => {

              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  className="group p-5 min-h-[125px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all text-center flex flex-col items-center justify-center"
                >

                  <div className="mb-4 flex items-center justify-center">

                    <Icon
                      size={38}
                      className={`${tool.iconClass} group-hover:scale-110 transition-transform duration-300`}
                    />

                  </div>

                  <span className="text-gray-200 font-medium text-sm md:text-base">
                    {tool.name}
                  </span>

                </motion.div>
              );

            })}

          </div>

        </section>

        {/* =================================================
            AREAS I FOCUS ON
        ================================================= */}

        <section
          id="focus"
          className="scroll-mt-28"
        >

          <div className="text-center mb-12">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
              Areas I Focus On
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Areas I{" "}
              <span className="text-blue-400">
                Focus On
              </span>
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-white/10">

            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                whileHover={{
                  backgroundColor: "rgba(59,130,246,0.10)",
                }}
                className="p-6 min-h-[170px] bg-white/[0.03] border border-white/10 text-center transition-all flex flex-col items-center"
              >

                <div className="text-3xl mb-4 text-blue-400">
                  {area.icon}
                </div>

                <h3 className="font-semibold text-sm md:text-base mb-2">
                  {area.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {area.description}
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        {/* =================================================
            SKILLS OVERVIEW
        ================================================= */}

        <section
          id="analytics"
          className="scroll-mt-28"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">

            Skills{" "}

            <span className="text-blue-400">
              Overview
            </span>

          </h2>

          <div className="w-full max-w-5xl mx-auto h-[350px] md:h-[420px] p-4 md:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl opacity-40" />

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: -10,
                  bottom: 20,
                }}
              >

                <defs>

                  <linearGradient
                    id="barGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#3b82f6"
                    />

                    <stop
                      offset="100%"
                      stopColor="#9333ea"
                    />

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
                    background: "#111827",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />

                <Bar
                  dataKey="value"
                  radius={[10, 10, 0, 0]}
                  fill="url(#barGradient)"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="scroll-mt-28"
        >

          <div className="mb-10">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
              Selected Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured{" "}
              <span className="text-purple-400">
                Projects
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* PROJECT 1 */}

            <motion.div
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all"
            >

              <div className="text-blue-400 mb-5">
                <FiBarChart2 size={42} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                HR Data Analytics
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Employee attrition analysis using Excel and Python to
                discover workforce insights.
              </p>

              <a
                href="https://github.com/iamdeepraj9119/HR-DATA-ANALYTICS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
              >

                <FiExternalLink />

                View Project

              </a>

            </motion.div>

            {/* PROJECT 2 */}

            <motion.div
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all"
            >

              <div className="text-blue-400 mb-5">
                <FiTrendingUp size={42} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                E-Commerce Dashboard
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Power BI dashboard designed to analyze sales performance and
                generate useful business insights.
              </p>

              <a
                href="https://github.com/iamdeepraj9119/E-Commerce-Sales-Dashboard-Power-BI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
              >

                <FiExternalLink />

                View Project

              </a>

            </motion.div>

            {/* PROJECT 3 */}

            <motion.div
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all"
            >

              <div className="text-blue-400 mb-5">
                <FiFileText size={42} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                CodeSweep
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Django-based tool designed to identify and remove unused
                code from projects.
              </p>

              <a
                href="https://github.com/iamdeepraj9119/Code-Sweep-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
              >

                <FiExternalLink />

                View Project

              </a>

            </motion.div>

          </div>

          {/* =================================================
              CERTIFICATES BUTTON
          ================================================= */}

          <div className="mt-10 flex justify-center">

            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => setShowCertificates(true)}
              className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >

              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">

                <FiAward
                  size={24}
                  className="text-blue-400 group-hover:text-purple-400 transition"
                />

              </span>

              <span className="text-left">

                <span className="block font-semibold text-white">
                  Certificates
                </span>

                <span className="block text-xs text-gray-500">
                  View my certifications
                </span>

              </span>

              <FiArrowRight
                size={20}
                className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition"
              />

            </motion.button>

          </div>

        </section>

        {/* =================================================
            CERTIFICATE MODAL
        ================================================= */}

        {showCertificates && (

          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setShowCertificates(false)}
          >

            <div
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#09090f] border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.18)]"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={() => setShowCertificates(false)}
                aria-label="Close certificates"
                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500/50 transition"
              >

                <FiX size={22} />

              </button>

              {/* HEADER */}

              <div className="px-6 md:px-10 pt-8 pb-4 text-center">

                <div className="flex justify-center mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">

                    <FiAward
                      size={28}
                      className="text-blue-400"
                    />

                  </div>

                </div>

                <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-2">
                  Credentials
                </p>

                <h2 className="text-3xl md:text-5xl font-bold">

                  Certificates{" "}

                  <span className="text-purple-400">
                    Gallery
                  </span>

                </h2>

                <p className="text-gray-500 mt-3 text-sm">
                  Certifications, achievements and professional learning.
                </p>

              </div>

              {/* EXISTING GALLERY */}

              <div className="px-4 md:px-8 pb-8">

                <CertificateGallery />

              </div>

            </div>

          </div>

        )}

        {/* =================================================
            TESTIMONIALS
        ================================================= */}

        <section
          id="testimonials"
          className="scroll-mt-28"
        >

          <div className="text-center mb-12">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">

              What People{" "}

              <span className="text-purple-400">
                Say
              </span>

            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Feedback from people I have worked, collaborated and learned
              with.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* TESTIMONIAL 1 */}

            <div className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">

              <div className="text-blue-400 text-xl mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 italic leading-relaxed mb-7">
                &quot;Add your verified client or colleague feedback here.&quot;
              </p>

              <div>

                <p className="font-bold">
                  Client / Colleague Name
                </p>

                <p className="text-gray-500 text-sm">
                  Role / Organization
                </p>

              </div>

            </div>

            {/* TESTIMONIAL 2 */}

            <div className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">

              <div className="text-purple-400 text-xl mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 italic leading-relaxed mb-7">

                &quot;Add another genuine testimonial describing your work,
                collaboration or results.&quot;

              </p>

              <div>

                <p className="font-bold">
                  Client / Colleague Name
                </p>

                <p className="text-gray-500 text-sm">
                  Role / Organization
                </p>

              </div>

            </div>

            {/* TESTIMONIAL 3 */}

            <div className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">

              <div className="text-blue-400 text-xl mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 italic leading-relaxed mb-7">

                &quot;Add a verified testimonial highlighting your skills,
                professionalism or project contribution.&quot;

              </p>

              <div>

                <p className="font-bold">
                  Client / Creator Name
                </p>

                <p className="text-gray-500 text-sm">
                  Role / Organization
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="scroll-mt-28"
        >

          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12">

              <p className="text-blue-400 uppercase tracking-[0.25em] text-sm mb-3">
                Let&apos;s Connect
              </p>

              <h2 className="text-4xl md:text-6xl font-bold">

                Ready to{" "}

                <span className="text-blue-400">
                  Grow?
                </span>

              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto mt-5">
                Let&apos;s discuss your goals, requirements and create a
                digital strategy that helps your brand reach the right
                audience.
              </p>

            </div>

            {/* CONTACT FORM */}

            <form
              onSubmit={handleContactSubmit}
              className="p-6 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
            >

              <div className="grid md:grid-cols-2 gap-6">

                {/* NAME */}

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Your name"
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-white"
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="yourname@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-white"
                  />

                </div>

                {/* PROJECT TYPE */}

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Project Type *
                  </label>

                  <select
                    name="Project Type"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-gray-300"
                  >

                    <option value="">
                      Select Project Type
                    </option>

                    <option>
                      SEO
                    </option>

                    <option>
                      Google Ads
                    </option>

                    <option>
                      Meta Ads
                    </option>

                    <option>
                      Social Media Marketing
                    </option>

                    <option>
                      Website / WordPress
                    </option>

                    <option>
                      Analytics
                    </option>

                    <option>
                      Content & Video
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </div>

                {/* BUDGET */}

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Estimated Budget
                  </label>

                  <select
                    name="Estimated Budget"
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-gray-300"
                  >

                    <option value="">
                      Select Estimated Budget
                    </option>

                    <option>
                      Under ₹10,000
                    </option>

                    <option>
                      ₹10,000 – ₹25,000
                    </option>

                    <option>
                      ₹25,000 – ₹50,000
                    </option>

                    <option>
                      ₹50,000+
                    </option>

                  </select>

                </div>

              </div>

              {/* PROJECT DETAILS */}

              <div className="mt-6">

                <label className="block text-sm text-gray-300 mb-2">
                  Tell me about your project *
                </label>

                <textarea
                  name="Project Details"
                  required
                  rows={6}
                  placeholder="Tell me about your goals, requirements, timeline, target audience and what you would like to achieve..."
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-white resize-none"
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="mt-7 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center gap-2"
              >

                <FiMail />

                Let&apos;s Discuss Your Project

                <FiArrowRight />

              </button>

            </form>

            {/* CONTACT LINKS */}

            <div className="flex justify-center gap-5 mt-8 flex-wrap">

              {/* GMAIL */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=deeprajsrivastav935@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/5 transition"
              >

                <FiMail
                  size={20}
                  className="text-red-400 group-hover:scale-110 transition"
                />

                <span>
                  Gmail
                </span>

              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/iamdeepraj9119/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition"
              >

                <FiLinkedin
                  size={20}
                  className="text-blue-400 group-hover:scale-110 transition"
                />

                <span>
                  LinkedIn
                </span>

              </a>

            </div>

            {/* EMAIL ADDRESS */}

            <div className="flex justify-center mt-5">

              <a
                href="mailto:deeprajsrivastav935@gmail.com"
                className="text-gray-500 hover:text-blue-400 transition text-sm flex items-center gap-2"
              >

                <FiMail size={15} />

                deeprajsrivastav935@gmail.com

              </a>

            </div>

          </div>

        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="border-t border-white/10 pt-8 text-center text-gray-500">

          <p>
            ©️ 2026 Deepraj Srivastav. All rights reserved.
          </p>

          <p className="text-sm mt-2">
            Digital Marketing • SEO • Analytics • AI
          </p>

        </footer>

      </div>

    </div>
  );
}