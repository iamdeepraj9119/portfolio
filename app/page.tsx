'use client';

import ScrollyCanvas from './components/ScrollyCanvas';
import Sections from './components/Sections';

export default function Home() {
  return (
    <main className="text-white">

      {/* 🔥 Background animation */}
      <ScrollyCanvas />

      {/* 🔥 HERO (ONLY ONE — FIXED) */}
      <section className="h-screen flex items-center justify-center">

        <div className="bg-black/40 backdrop-blur-xl px-10 py-6 rounded-2xl border border-white/10 text-center shadow-xl">

          <h1 className="text-5xl font-bold">
            Deepraj Srivastav
          </h1>

          <p className="text-blue-400 mt-2 text-lg">
            Data Analyst | Digital Marketing
          </p>

          <p className="text-white/70 mt-2 text-sm">
            Python • SQL • Excel • Power BI <br />
            SEO • Google Analytics • Social Media Marketing
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <a href="#projects" className="px-6 py-2 bg-white text-black rounded-lg">
              View Projects
            </a>

            <a href="/contact" className="px-6 py-2 bg-blue-500 rounded-lg">
              Contact Me
            </a>
          </div>

        </div>

      </section>

      {/* बाकी content */}
      <Sections />

    </main>
  );
}