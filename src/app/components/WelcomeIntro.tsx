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
          className="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background - ảnh cô dâu chú rể (không blur, ảnh rõ) */}
          <div className="absolute inset-0 welcome-bg" />

          {/* Content: mobile = dán dưới để ảnh lộ nửa trên, desktop = giữa */}
          <motion.div
            className="relative z-10 w-full max-w-lg px-6 py-8 sm:px-8 sm:py-12 mx-4 mb-6 sm:mb-0 text-center pb-safe"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Nền tối ấm (không blur) — tone thiệp cưới, chữ rõ */}
            <div className="rounded-2xl bg-[rgba(45,35,30,0.75)] border border-white/25 shadow-2xl shadow-black/30 px-6 py-8 sm:px-10 sm:py-12">
              {/* Đường trang trí vàng đồng */}
              <motion.div
                className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />

              <motion.p
                className="text-white text-4xl sm:text-5xl md:text-6xl font-great font-extralight tracking-wide leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Tạ Như Quỳnh
              </motion.p>
              <motion.span
                className="inline-block font-clicker text-3xl sm:text-4xl text-[#e8d5b7] my-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                &amp;
              </motion.span>
              <motion.p
                className="text-white text-4xl sm:text-5xl md:text-6xl font-great font-extralight tracking-wide leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Chang Shu Yu
              </motion.p>

              {/* Divider with date */}
              <motion.div
                className="flex items-center justify-center gap-4 my-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.6 }}
              >
                <span className="h-px flex-1 max-w-[60px] bg-white/50" />
                <span className="text-[#f5efe6] text-sm sm:text-base tracking-[0.3em] uppercase [font-family:var(--font-playfair-display)]">
                  18 · 05 · 2025
                </span>
                <span className="h-px flex-1 max-w-[60px] bg-white/50" />
              </motion.div>

              <motion.p
                className="text-[#e8d5b7]/95 text-sm font-light tracking-widest uppercase mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Trân trọng kính mời
              </motion.p>

              <motion.button
                onClick={handleStart}
                className="group relative px-10 py-4 rounded-full text-base font-medium text-gray-900 overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ boxShadow: "0 0 28px rgba(212, 175, 55, 0.35)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#f0e6d8] via-[#faf5ef] to-[#f0e6d8]" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Wedding Invitation
                  <span className="text-lg" aria-hidden>💍</span>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll hint - dưới card trên mobile */}
          <motion.div
            className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#e8d5b7]/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-light">
              Mở thiệp
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
