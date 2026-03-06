"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ALBUM2_FILES = [
  "Copy of DSC08541_1 Large.jpeg",
  "Copy of DSC08427_1 Large.jpeg",
  "Copy of DSC08318_1 Large.jpeg",
  "Copy of DSC08342_1 Large.jpeg",
  "Copy of DSC08712_1 Large.jpeg",
  "Copy of DSC08675_1 Large.jpeg",
  "Copy of DSC08553_1 Large.jpeg",
  "Copy of DSC08725_1 Large.jpeg",
  "Copy of DSC08573_1 Large.jpeg",
  "Copy of DSC08503_1 Large.jpeg",
  "Copy of DSC08435_1 Large.jpeg",
  "Copy of DSC08324_1 Large.jpeg",
  "Copy of DSC08319_1 Large.jpeg",
  "Copy of DSC08733_1 Large.jpeg",
  "Copy of DSC08740_1 Large.jpeg",
  "Copy of DSC08659_1 Large.jpeg",
  "Copy of DSC08702_1 Large.jpeg",
  "Copy of DSC08696_1 Large.jpeg",
  "Copy of DSC08459_1 Large.jpeg",
  "Copy of DSC08334_1 Large.jpeg",
  "Copy of DSC08685_1 Large.jpeg",
  "Copy of DSC08492_1 Large.jpeg",
  "Copy of DSC08713_1 Large.jpeg",
  "Copy of DSC08752_1 Large.jpeg",
  "Copy of DSC08591_1 Large.jpeg",
];

const ALBUM3_FILES = [
  "DSC01676 Medium.jpeg",
  "DSC01694 Medium.jpeg",
  "DSC01725 Medium.jpeg",
  "DSC01743 Medium.jpeg",
  "DSC01778 Medium.jpeg",
  "DSC01806 Medium.jpeg",
  "DSC01832 Medium.jpeg",
  "DSC01876 Medium.jpeg",
  "DSC01930 Medium.jpeg",
  "DSC01941 Medium.jpeg",
  "DSC01960 Medium.jpeg",
  "DSC01980 Medium.jpeg",
  "DSC02045 Medium.jpeg",
  "DSC02135 Medium.jpeg",
  "DSC02153 Medium.jpeg",
  "DSC02203 Medium.jpeg",
  "DSC02240 Medium.jpeg",
  "DSC02253 Medium.jpeg",
  "DSC02276 Medium.jpeg",
  "DSC02348 Medium.jpeg",
  "DSC02411 Medium.jpeg",
  "DSC02435 Medium.jpeg",
  "DSC02472 Medium.jpeg",
  "DSC02529 Medium.jpeg",
  "DSC02550 Medium.jpeg",
  "DSC02582 Medium.jpeg",
  "DSC02617 Medium.jpeg",
  "DSC02637 Medium.jpeg",
  "DSC02647 Medium.jpeg",
  "DSC02680 Medium.jpeg",
];

const ALBUM_IMAGES = [
  ...ALBUM2_FILES.map((name) => `/images/album2/${encodeURIComponent(name)}`),
  ...ALBUM3_FILES.map((name) => `/images/album3/${encodeURIComponent(name)}`),
];

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

function getBackgroundImage(batchIndex: number) {
  const start = (batchIndex % BATCH_COUNT) * PHOTOS_PER_VIEW;
  return ALBUM_IMAGES[start % TOTAL_IMAGES];
}

const Album = () => {
  const [batchIndex, setBatchIndex] = useState(0);
  const batchImages = getBatchImages(batchIndex);
  const bgImage = getBackgroundImage(batchIndex);

  useEffect(() => {
    const id = setInterval(() => {
      setBatchIndex((i) => (i + 1) % BATCH_COUNT);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Album ảnh cưới"
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center py-16 sm:py-20 px-4"
    >
      {/* Background — ảnh album thay đổi theo lô */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={batchIndex}
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        {/* Overlay — mờ nhẹ phía dưới, tông ấm không trắng gắt */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(253,245,248,0.92)] via-[rgba(255,250,252,0.4)] via-35% to-transparent"
          aria-hidden
        />
      </div>

      {/* Nội dung */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-2">
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
                className="aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-xl ring-1 ring-white/30 bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Image
                  src={src}
                  alt={`Ảnh cưới ${batchIndex * PHOTOS_PER_VIEW + i + 1}`}
                  width={480}
                  height={480}
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
