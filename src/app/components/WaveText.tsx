"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  text: string;
  className?: string;
};

export default function WaveText({ text, className = "" }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Hiệu ứng sẽ chạy lại khi phần tử xuất hiện trong khung nhìn
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ y: 0, opacity: 0 }}
      animate={
        inView
          ? {
              y: [0, -20, 10, -5, 0], // Lượn sóng lên xuống
              opacity: [0, 1, 1, 1, 1], // Hiện dần
            }
          : { y: 0, opacity: 0 } // Trạng thái ban đầu khi phần tử không trong khung nhìn
      }
      transition={{
        duration: 1.5, // Thời gian hiệu ứng
        ease: "easeInOut", // Hiệu ứng mượt
      }}
    >
      {text}
    </motion.div>
  );
}
