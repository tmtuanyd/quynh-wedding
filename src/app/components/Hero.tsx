"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center text-white hero-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* <div className="absolute min-h-screen inset-0 bg-white/10"></div> */}
      <div className="text-center space-y-4 relative">
        <h1 className="text-4xl md:text-6xl font-great">
          We Are Getting Married!
        </h1>
        <p className="text-[26px] md:text-4xl font-great">
          Join us to celebrate our special day
        </p>
      </div>
    </motion.section>
  );
}
