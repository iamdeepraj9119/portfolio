'use client';

import ScrollyCanvas from './components/ScrollyCanvas';
import SkillsSection from './components/Sections';

export default function Home() {
  return (
    <main className="text-white">

      {/* 🔥 Background animation */}
      <ScrollyCanvas />

      {/* 🔥 HERO SECTION (same as your old UI) */}
      <section className="h-screen flex items-center justify-center">

        <div className="bg-black/40 backdrop-blur-xl px-10 py-6 rounded-2xl border border-white/10 text-center">

          <h1 className="text-5xl font-bold">
            Deepraj Srivastav
          </h1>

          <p className="text-blue-400 mt-2 text-lg">
            Data Analyst
          </p>

          <p className="text-white/70 mt-2 text-sm">
            Python • SQL • Excel • Power BI
          </p>

        </div>

      </section>

      {/* बाकी content */}
      <SkillsSection />

    </main>
  );
}