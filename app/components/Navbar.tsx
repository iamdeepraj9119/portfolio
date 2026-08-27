"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "tools", label: "Tools" },
  { id: "focus", label: "Focus" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      let currentSection = "home";

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);

        if (el) {
          const top = el.offsetTop - 160;

          if (currentScroll >= top) {
            currentSection = item.id;
          }
        }
      });

      setActive(currentSection);

      if (currentScroll > lastScroll && currentScroll > 120) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60" />

      {/* Glass */}
      <div className="relative backdrop-blur-xl bg-black/50 border-b border-white/10">

        {/* Neon Border */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent whitespace-nowrap"
          >
            <span className="md:hidden">Deepraj</span>
            <span className="hidden md:block">Deepraj Srivastav</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5 text-sm">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 transition ${
                  active === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:scale-105 transition shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              Let&apos;s Work Together →
            </a>
          </div>

          {/* TABLET MENU */}
          <div className="hidden md:flex lg:hidden">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-sm"
            >
              Let&apos;s Work Together →
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`w-6 h-[2px] bg-white transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-3 bg-black/90 backdrop-blur-2xl border-t border-white/10">

            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-xl transition ${
                    active === item.id
                      ? "bg-blue-500/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="mt-3 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
              >
                Let&apos;s Work Together →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}