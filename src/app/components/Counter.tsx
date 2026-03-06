"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2026-04-05T08:00:00");

function useTimeLeft() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const Counter = () => {
  const timeLeft = useTimeLeft();

  const blocks = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-[var(--wedding-bg-alt)] to-[var(--wedding-bg)] text-wedding">
      <motion.div
        className="w-full max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-5 h-px w-12 mx-auto bg-[var(--wedding-accent-light)]" />
        <h2 className="font-great text-4xl sm:text-5xl lg:text-6xl text-wedding-accent tracking-wide">
          Countdown
        </h2>
        <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-wedding-secondary/90 mt-2 [font-family:var(--font-playfair-display)]">
          05 · 04 · 2026
        </p>

        {/* 4 ô số lớn — đồng bộ scale với section khác */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-10 sm:mt-12 lg:mt-14">
          {blocks.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm border border-[var(--wedding-border)] shadow-[0_4px_24px_rgba(61,46,46,0.06)] py-6 sm:py-8 lg:py-10 px-3 sm:px-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-wedding-accent tabular-nums [font-family:var(--font-playfair-display)] leading-none">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-wedding-secondary mt-2 sm:mt-3 [font-family:var(--font-playfair-display)]">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-great text-2xl sm:text-3xl lg:text-4xl text-wedding mt-10 sm:mt-12">
          Until the Wedding Day!
        </p>
      </motion.div>
    </section>
  );
};

export default Counter;
