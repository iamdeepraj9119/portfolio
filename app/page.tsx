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

      {/* ✅ ONLY animation here */}
      <section className="relative w-full pt-20">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* ✅ Sections */}
      <Sections />

      {/* ✅ Projects */}
      <Projects />

      {/* ✅ Footer */}
      <footer className="w-full py-12 text-center text-white/30 text-sm bg-[#121212] border-t border-white/5">
        <p>©️ {new Date().getFullYear()} Deepraj Srivastav. All rights reserved.</p>
      </footer>

    </main>
  );
}