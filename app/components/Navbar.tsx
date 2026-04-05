"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });

      if (window.scrollY > lastScroll && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60"></div>

      {/* Glass */}
      <div className="relative backdrop-blur-xl bg-white/5 border-b border-white/10">

        {/* Neon Border */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">

          {/* LOGO */}
          <h1 className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent whitespace-nowrap">
            <span className="md:hidden">Deepraj</span>
            <span className="hidden md:block">Deepraj Srivastav</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative transition ${
                  active === item ? "text-white" : "text-gray-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-black/80 backdrop-blur-xl">

            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`text-sm ${
                  active === item ? "text-white" : "text-gray-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
}