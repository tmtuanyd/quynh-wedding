"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ALBUM_FINAL_FILES = [
  "Copy of DSC08318_1 Large.jpeg",
  "Copy of DSC08331_1 Large.jpeg",
  "DSC01694 Medium.jpeg",
  "DSC01930 Medium.jpeg",
  "DSC02045 Medium.jpeg",
  "DSC02203 Medium.jpeg",
  "DSC02240 Medium.jpeg",
  "DSC02435 Medium.jpeg",
  "DSC02550 Medium.jpeg",
  "DSC02582 Medium.jpeg",
  "DSC02637 Medium.jpeg",
];

const ALBUM_IMAGES = ALBUM_FINAL_FILES.map(
  (name) => `/images/album-final/${encodeURIComponent(name)}`,
);

const PHOTOS_PER_VIEW = 6;
const ROTATE_INTERVAL_MS = 8000; // 8 giây đổi một lần
const TOTAL_IMAGES = ALBUM_IMAGES.length;
const BATCH_COUNT = Math.ceil(TOTAL_IMAGES / PHOTOS_PER_VIEW);

/** Luôn trả về đủ PHOTOS_PER_VIEW ảnh; nếu thiếu thì lặp lại từ đầu để không bị lẻ. */
function getBatchImages(batchIndex: number) {
  const start = (batchIndex % BATCH_COUNT) * PHOTOS_PER_VIEW;
  const result: string[] = [];
  for (let i = 0; i < PHOTOS_PER_VIEW; i++) {
    result.push(ALBUM_IMAGES[(start + i) % TOTAL_IMAGES]);
  }
  return result;
}

const Album = () => {
  const [batchIndex, setBatchIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const batchImages = getBatchImages(batchIndex);

  useEffect(() => {
    if (!isInView) return;

    const id = setInterval(() => {
      setBatchIndex((i) => (i + 1) % BATCH_COUNT);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      aria-label="Album ảnh cưới"
      className="w-full min-h-screen bg-wedding overflow-hidden flex flex-col items-center justify-center py-16 sm:py-20 px-4"
    >
      {/* Nội dung */}
      <div className="w-full max-w-5xl mx-auto text-center px-2">
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-great text-wedding-accent">
            Album Cưới
          </h2>
          <p className="mt-2 text-sm sm:text-base tracking-[0.18em] uppercase text-wedding-secondary [font-family:var(--font-playfair-display)]">
            Những khoảnh khắc ngọt ngào của chúng mình
          </p>
        </motion.div>

        {/* Khung 6 ảnh — 3 cột x 2 hàng, ảnh to hơn */}
        <AnimatePresence mode="wait">
          <motion.div
            key={batchIndex}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {batchImages.map((src, i) => (
              <motion.div
                key={`${batchIndex}-${i}-${src}`}
                className="aspect-[2/3] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl ring-1 ring-white/30 bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Image
                  src={src}
                  alt={`Ảnh cưới ${batchIndex * PHOTOS_PER_VIEW + i + 1}`}
                  width={480}
                  height={720}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Album;
