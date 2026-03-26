import Navbar from "./components/Navbar";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";
import Sections from "./components/Sections";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen">

      {/* 🔥 Navbar */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">

        {/* Background */}
        <ScrollyCanvas />
        <Overlay />

        {/* 🔥 HERO BOX (UPDATED) */}
        <div className="absolute z-10 px-4">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 rounded-2xl shadow-2xl max-w-[90vw] sm:max-w-xl mx-auto text-center">

            {/* NAME */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 leading-tight">
              Deepraj Srivastav
            </h1>

            {/* ROLE */}
            <p className="text-base sm:text-lg md:text-2xl text-blue-400 font-semibold mb-2">
              Data Analyst | Digital Marketing (Learning)
            </p>

            {/* SKILLS */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5">
              Python • SQL • Excel • Power BI <br className="hidden sm:block" />
              SEO • Google Analytics • Social Media Marketing
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

              <a
                href="https://github.com/iamdeepraj9119"
                target="_blank"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition text-sm sm:text-base"
              >
                View GitHub
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:scale-105 transition text-sm sm:text-base"
              >
                Contact Me
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SECTIONS ================= */}
      <Sections />

      {/* ================= PROJECTS ================= */}
      <Projects />

      {/* ================= FOOTER ================= */}
      <footer className="w-full py-12 text-center text-white/30 text-sm bg-[#121212] border-t border-white/5">
        <p>©️ {new Date().getFullYear()} Deepraj Srivastav. All rights reserved.</p>
      </footer>

    </main>
  );
}