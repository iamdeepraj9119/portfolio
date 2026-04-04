'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [active, setActive] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const total = document.body.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);

      const sections = ['about', 'skills', 'projects'];

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  const linkClass = (section: string) =>
    `relative cursor-pointer transition duration-300 ${
      active === section
        ? 'text-blue-400 font-semibold'
        : 'text-white/70'
    } hover:text-blue-400`;

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-blue-500 z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-20 py-2">

          {/* Logo */}
          <h1
            onClick={() => handleClick('about')}
            className="text-xl font-bold text-white tracking-tight cursor-pointer"
          >
            Deepraj Srivastav
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">

            {['about', 'skills', 'projects'].map((item) => (
              <div
                key={item}
                onClick={() => handleClick(item)}
                className={linkClass(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                    active === item ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            ))}

            {/* 🔥 NEW LINKS */}
            <Link href="/about" className="text-white/70 hover:text-blue-400">
              About Page
            </Link>

            <Link href="/contact" className="text-white/70 hover:text-blue-400">
              Contact
            </Link>

            <Link href="/privacy-policy" className="text-white/70 hover:text-blue-400">
              Privacy
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-4 text-center">
            {['about', 'skills', 'projects'].map((item) => (
              <div
                key={item}
                onClick={() => {
                  handleClick(item);
                  setMenuOpen(false);
                }}
                className="block text-white text-lg hover:text-blue-400 transition cursor-pointer"
              >
                {item.toUpperCase()}
              </div>
            ))}

            {/* 🔥 MOBILE LINKS */}
            <Link href="/about" className="block text-white text-lg hover:text-blue-400">
              ABOUT PAGE
            </Link>

            <Link href="/contact" className="block text-white text-lg hover:text-blue-400">
              CONTACT
            </Link>

            <Link href="/privacy-policy" className="block text-white text-lg hover:text-blue-400">
              PRIVACY
            </Link>
          </div>
        )}
      </div>
    </>
  );
}