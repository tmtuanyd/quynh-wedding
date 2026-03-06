"use client";

import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <motion.section
      className="thank-bg relative isolate flex min-h-[100dvh] items-end justify-center overflow-hidden px-4 pt-16 pb-20 sm:pt-20 sm:pb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay nhẹ để vẫn thấy ảnh nền rõ */}
      <div
        className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[rgba(35,20,20,0.42)] via-[rgba(35,20,20,0.18)] to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.16),transparent_55%)]"
        aria-hidden
      />

      <motion.div
        className="relative z-10 w-full max-w-3xl px-6 py-10 text-center text-white sm:px-10 sm:py-12"
        style={{
          textShadow: "0 1px 0 rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.25)",
        }}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <motion.p
          className="font-great text-4xl sm:text-5xl lg:text-6xl text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thank you!
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg text-white/95 [font-family:var(--font-playfair-display)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          Cảm ơn bạn đã dành thời gian quý báu để chung vui cùng chúng mình.
        </motion.p>

        <motion.div
          className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Thanks;
