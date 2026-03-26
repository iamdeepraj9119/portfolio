'use client';

import { useState } from 'react';
import Image from 'next/image';

const certificates = [
  {
    src: '/cert1.jpg',
    title: 'Google Data Analytics',
  },
  {
    src: '/cert2.jpg',
    title: 'Career Essentials (Microsoft + LinkedIn)',
  },
  {
    src: '/cert3.jpg',
    title: 'SQL HackerRank',
  },
  {
    src: '/cert4.jpg',
    title: 'Prompt Engineering',
  },
  {
    src: '/cert5.jpg',
    title: 'AI & Data Science',
  },
];

export default function CertificateGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="mt-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
        Certificates Gallery
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelected(cert.src)}
            className="cursor-pointer group"
          >
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src={cert.src}
                alt={cert.title}
                width={500}
                height={300}
                className="rounded-xl group-hover:scale-105 transition"
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <Image
            src={selected}
            alt="Certificate"
            width={800}
            height={600}
            className="rounded-xl max-w-[90%] max-h-[90%]"
          />
        </div>
      )}
    </section>
  );
}