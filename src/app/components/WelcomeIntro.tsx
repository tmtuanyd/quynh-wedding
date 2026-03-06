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
    onStart();
    setShowIntro(false);
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center overflow-hidden welcome-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background - ảnh cô dâu chú rể */}
          <div className="absolute inset-0 welcome-bg" />
          {/* Lớp texture nhẹ (tùy chọn) */}
          <div className="absolute inset-0 welcome-intro-grain" aria-hidden />

          {/* Nội dung chính — mobile: khối nhỏ gọn dưới đáy để ảnh lộ rõ */}
          <motion.div
            className="relative z-10 w-full max-w-lg px-4 py-4 sm:px-10 sm:py-14 mx-3 sm:mx-4 mb-28 sm:mb-0 text-center pb-safe"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Khối thiệp — mobile: padding & khoảng cách nhỏ để chiếm ít chiều cao */}
            <div className="relative rounded-2xl bg-[linear-gradient(180deg,rgba(255,252,250,0.95)_0%,rgba(255,245,248,0.92)_100%)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.8)_inset] px-5 py-5 sm:px-12 sm:py-14 welcome-intro-card">
              <div className="absolute inset-0 rounded-2xl pointer-events-none welcome-intro-border" aria-hidden />
              {/* Đường trang trí — mobile: nhỏ gọn */}
              <motion.div
                className="flex flex-col items-center gap-1 mb-3 sm:mb-8"
                initial={{ opacity: 0, scaleX: 0.6 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#d4a5a5] to-transparent" />
                <span className="block h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#e8c4c4] to-transparent" />
              </motion.div>

              <motion.p
                className="text-[#5c4040] text-2xl sm:text-5xl md:text-6xl font-great font-extralight tracking-[0.02em] leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.85 }}
              >
                Tạ Như Quỳnh
              </motion.p>
              <motion.span
                className="inline-block font-clicker text-xl sm:text-4xl text-[#b87070] my-1 sm:my-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                &amp;
              </motion.span>
              <motion.p
                className="text-[#5c4040] text-2xl sm:text-5xl md:text-6xl font-great font-extralight tracking-[0.02em] leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.85 }}
              >
                Chang Shu Yu
              </motion.p>

              {/* Ngày — mobile: khoảng cách nhỏ */}
              <motion.div
                className="flex items-center justify-center gap-3 my-3 sm:my-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="h-px flex-1 max-w-[48px] sm:max-w-[72px] bg-gradient-to-r from-transparent to-[#c99a9a]/50" />
                <span className="text-[#6b4a4a] text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.35em] uppercase [font-family:var(--font-playfair-display)] font-light">
                  05 · 04 · 2026
                </span>
                <span className="h-px flex-1 max-w-[48px] sm:max-w-[72px] bg-gradient-to-l from-transparent to-[#c99a9a]/50" />
              </motion.div>

              <motion.p
                className="text-[#b87070] text-[10px] sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-10 [font-family:var(--font-playfair-display)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Trân trọng kính mời
              </motion.p>

              {/* Nút — mobile: nhỏ gọn */}
              <motion.button
                onClick={handleStart}
                className="group relative px-8 py-2.5 sm:px-12 sm:py-4 rounded-full text-sm sm:text-[15px] font-medium text-[#5c4040] overflow-hidden tracking-[0.1em] sm:tracking-[0.12em] transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  boxShadow: "0 0 0 1px rgba(184,112,112,0.4), 0 12px 28px -8px rgba(247,200,210,0.4)",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-b from-[#fdf5f7] via-[#f8e8ec] to-[#f0dce2]" />
                <span className="absolute inset-0 rounded-full border border-[#e0b8b8]/60 group-hover:border-[#d4a5a5] transition-colors duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Wedding Invitation
                  <span className="text-base opacity-80" aria-hidden>💍</span>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Mở thiệp — luôn nổi trên, không bị card che */}
          <motion.button
            type="button"
            onClick={handleStart}
            className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer rounded-2xl px-6 py-3 sm:py-4 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b87070]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94, transition: { duration: 0.12 } }}
            aria-label="Mở thiệp mời"
          >
            <span
              className="text-[11px] sm:text-xs tracking-[0.4em] font-medium text-[#6b4a4a] [font-family:var(--font-playfair-display)] select-none"
              style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
            >
              MỞ THIỆP
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#c99a9a]/70 to-transparent" />
            <motion.div
              className="rounded-full p-2 border border-[#d4a5a5]/40 bg-[#fdf5f7]/80"
              animate={{ y: [0, 5, 0], opacity: [1, 0.9, 1] }}
              transition={{
                y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
                opacity: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
              }}
            >
              <ChevronDown className="w-5 h-5 text-[#b87070] pointer-events-none" strokeWidth={2} />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
