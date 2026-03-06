"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const photos = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section className="bg-wedding py-16 px-4">
      <motion.h2
        className="text-3xl font-great text-wedding-accent text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Khoảnh khắc ngọt ngào
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {photos.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: idx * 0.3 }}
          >
            <Image
              src={src}
              alt={`Ảnh cưới ${idx + 1}`}
              width={500}
              height={500}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
