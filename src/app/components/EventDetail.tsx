"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventDetails() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 }, // Trạng thái ban đầu
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1, // Thời gian hiệu ứng
        ease: "easeOut", // Hiệu ứng mượt
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center event-bg">
      <motion.div
        className="bg-white/20 backdrop-blur-md rounded-lg p-8 md:p-12 text-center text-white max-w-4xl shadow-lg relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="absolute left-0 top-0 w-[80px]">
          <Image
            src="/images/decor.svg"
            alt="Wedding"
            width={216}
            height={153}
            layout="responsive"
          />
        </div>
        <div className="absolute right-0 top-0 w-[80px] rotate-90">
          <Image
            src="/images/decor.svg"
            alt="Wedding"
            width={216}
            height={153}
            layout="responsive"
          />
        </div>
        <div className="absolute left-0 bottom-0 w-[80px] -rotate-90">
          <Image
            src="/images/decor.svg"
            alt="Wedding"
            width={216}
            height={153}
            layout="responsive"
          />
        </div>
        <div className="absolute right-0 bottom-0 w-[80px] rotate-180">
          <Image
            src="/images/decor.svg"
            alt="Wedding"
            width={216}
            height={153}
            layout="responsive"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-great mb-6">Event Details</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Reception */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-semibold">8:30</p>
            <p className="text-lg md:text-xl italic">Đón khách</p>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-16 w-[1px] bg-white/50"></div>
          {/* Ceremony */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-semibold">09:00</p>
            <p className="text-lg md:text-xl italic">Dùng tiệc</p>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-16 w-[1px] bg-white/50"></div>
          {/* Dinner */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-semibold">10:30</p>
            <p className="text-lg md:text-xl italic">Lễ vu quy</p>
          </div>
        </div>
        <p className="text-sm md:text-base italic mt-6">
          Chúng mình rất trân trọng sự có mặt của bạn trong ngày quan trọng nhất
          của cuộc đời. Sự hiện diện, tình cảm và những lời chúc tốt đẹp của bạn
          đã làm cho ngày đặc biệt của chúng mình thêm trọn vẹn.
        </p>
        <p className="text-base md:text-lg mt-6 font-great">
          Huế & Chiến with Love
        </p>
      </motion.div>
    </section>
  );
}
