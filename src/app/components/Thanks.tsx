"use client";

import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <motion.section
      className="thank-bg relative flex min-h-[50vh] sm:min-h-[400px] items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Lớp phủ nhẹ để chữ rõ, vẫn thấy ảnh nền */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        aria-hidden
      />
      <div className="relative z-10 px-4 text-center">
        <motion.p
          className="font-great text-3xl sm:text-4xl lg:text-5xl text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thank you!
        </motion.p>
        <motion.p
          className="mt-3 text-sm sm:text-base text-white/90 tracking-wide [font-family:var(--font-playfair-display)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Cảm ơn bạn đã đến với ngày vui của chúng mình
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Thanks;
