'use client';

import { useState } from 'react';
import Image from 'next/image';

const certificates = [
  {
    src: '/cert1.jpg',
    title: 'Google Data Analytics Certification',
  },
  {
    src: '/cert2.jpg',
    title: 'Career Essentials in Data Analysis (Microsoft + LinkedIn)',
  },
  {
    src: '/cert3.jpg',
    title: 'Introduction to Career Skills in Data Analytics (LinkedIn)',
  },
  {
    src: '/cert4.jpg',
    title: 'SQL (HackerRank Certified)',
  },
  {
    src: '/cert5.jpg',
    title: 'AI & Data Science Certification',
  },
];

export default function CertificateGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="mt-16">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        🎓 Certificates Gallery
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelected(cert.src)}
            className="cursor-pointer group relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r 
            from-blue-500 via-purple-500 to-pink-500 
            rounded-xl blur opacity-20 group-hover:opacity-60 transition"></div>

            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <Image
                src={cert.src}
                alt={cert.title}
                width={500}
                height={300}
                className="rounded-xl group-hover:scale-110 transition duration-300"
              />
            </div>

            <p className="text-sm text-gray-400 mt-2 text-center">
              {cert.title}
            </p>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        >
          <Image
            src={selected}
            alt="Certificate"
            width={900}
            height={600}
            className="rounded-xl max-w-full max-h-[90vh]"
          />
        </div>
      )}

    </section>
  );
}