"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen flex items-center justify-center bg-cover  bg-top  text-white bg-[url('/images/hero.jpg')] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="text-center space-y-4 relative">
        <h1 className="text-4xl md:text-6xl font-great">
          We Are Getting Married!
        </h1>
        <p className="text-lg md:text-4xl font-great">
          Join us to celebrate our special day
        </p>
      </div>
    </motion.section>
  );
}
