"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
  onStart: () => void;
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
}

export default function WelcomeIntro({
  onStart,
  showIntro,
  setShowIntro,
}: Props) {
  const handleStart = () => {
    onStart(); // phát nhạc
    setShowIntro(false); // bắt đầu animation ẩn
    // const hero = document.getElementById("hero");
    // if (hero) {
    //   setTimeout(() => {
    //     hero.scrollIntoView({ behavior: "smooth" });
    //   }, 300); // delay chút để animation chạy xong
    // }
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 text-white flex items-center justify-center flex-col z-50 welcome-bg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-3xl mt-4 mb-8 text-center font-extralight font-great"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Mai Huế <span className="mx-2 font-clicker">&</span> Thế Chiến{" "}
            <br />
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
