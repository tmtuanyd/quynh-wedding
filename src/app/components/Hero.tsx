// // app/components/Hero.tsx
// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative h-screen w-full overflow-hidden bg-black text-white"
//     >
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/images/hero.jpg"
//           alt="Wedding"
//           className="object-cover w-full h-full opacity-60"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         <motion.h1
//           className="text-4xl sm:text-6xl font-extralight tracking-wide mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           We Are Getting Married!
//         </motion.h1>
//         <motion.p
//           className="text-xl sm:text-2xl font-light mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           Mai Huế & Thế Chiến
//         </motion.p>
//         <motion.p
//           className="text-base sm:text-lg font-light"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//         >
//           17-18/05/2025 — Bắc Giang
//         </motion.p>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center space-y-4">
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
