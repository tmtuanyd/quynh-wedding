"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

export default function WaveText({ text, className = "" }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
      const timeout = setTimeout(() => setShow(false), 1000); // allow re-trigger
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`flex gap-[1px] ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${show}-${i}`}
          className="inline-block"
          initial={{ y: 0, opacity: 1 }}
          animate={
            show
              ? {
                  y: [10, -10, 0],
                  opacity: [0, 1, 1],
                }
              : { y: 0, opacity: 1 } // giữ nguyên trạng thái cuối cùng
          }
          transition={{
            delay: i * 0.06,
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
