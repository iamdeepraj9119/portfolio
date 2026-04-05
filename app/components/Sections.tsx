"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    src: "/cert1.jpg",
    title: "Google Data Analytics Certification",
  },
  {
    src: "/cert2.jpg",
    title: "Career Essentials in Data Analysis",
  },
  {
    src: "/cert3.jpg",
    title: "Career Skills in Data Analytics",
  },
  {
    src: "/cert4.jpg",
    title: "SQL HackerRank Certified",
  },
  {
    src: "/cert5.jpg",
    title: "AI & Data Science Certification",
  },
];

export default function CertificateGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center border-b border-gray-700 pb-2">
        Certificates
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl cursor-pointer shadow-lg hover:bg-white/20 transition"
            onClick={() => setSelected(cert.src)}
          >
            <Image
              src={cert.src}
              alt={cert.title}
              width={400}
              height={250}
              className="rounded-lg object-cover"
            />

            <p className="mt-3 text-sm text-gray-300 text-center">
              {cert.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-3xl w-full p-4"
          >
            <Image
              src={selected}
              alt="certificate"
              width={800}
              height={500}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}