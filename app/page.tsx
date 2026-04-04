import ScrollyCanvas from './components/ScrollyCanvas';
import SkillsSection from './components/Sections';

export default function Home() {
  return (
    <main className="relative">

      {/* 🔥 BACKGROUND ANIMATION */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <ScrollyCanvas />
      </div>

      {/* 🔥 HERO CONTENT */}
      <section className="h-screen flex flex-col justify-center items-center text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Deepraj Srivastav
        </h1>

        <p className="text-blue-400 text-lg mb-2">
          Data Analyst | Digital Marketing
        </p>

        <p className="text-white/70 mb-6">
          Python • SQL • Excel • Power BI <br />
          SEO • Google Analytics • Social Media Marketing
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-white text-black rounded-lg">
            View Projects
          </a>

          <a href="/contact" className="px-6 py-2 bg-blue-500 rounded-lg">
            Contact Me
          </a>
        </div>
      </section>

      {/* बाकी content */}
      <SkillsSection />

    </main>
  );
}