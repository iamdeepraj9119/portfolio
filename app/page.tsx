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

        {/* Background Animation */}
        <ScrollyCanvas />
        <Overlay />

        {/* 🔥 HERO CONTENT */}
        <div className="absolute z-10 text-center px-4">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 sm:px-10 sm:py-10 rounded-2xl shadow-2xl">

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              Deepraj Srivastav
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-semibold mb-2">
              Data Analyst | Digital Marketing (Learning)
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
              Python • SQL • Excel • Power BI • SEO • Analytics
            </p>

            {/* 🔥 Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="https://github.com/iamdeepraj9119"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
              >
                View GitHub
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:scale-105 transition"
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