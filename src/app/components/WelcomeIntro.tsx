"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  onStart: () => void;
}

export default function WelcomeIntro({ onStart }: Props) {
  const [showIntro, setShowIntro] = useState(true);

  const handleStart = () => {
    onStart(); // phát nhạc
    setShowIntro(false); // bắt đầu animation ẩn
    const hero = document.getElementById("hero");
    if (hero) {
      setTimeout(() => {
        hero.scrollIntoView({ behavior: "smooth" });
      }, 300); // delay chút để animation chạy xong
    }
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 bg-black text-white flex items-center justify-center flex-col z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-light text-center font-great"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Our Wedding
          </motion.h1>

          <motion.p
            className="text-xl mt-4 mb-8 text-center font-extralight font-great"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Mai Huế <span className="mx-2 font-clicker">&</span> Thế Chiến —
            18/05/2025
          </motion.p>

          <button
            onClick={handleStart}
            className="px-6 py-3 bg-white text-black rounded-full text-lg hover:bg-white/90 transition"
          >
            Bắt đầu hành trình 💖
          </button>

          <motion.div
            className="mt-8 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
