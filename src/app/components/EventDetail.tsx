"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventDetails() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center event-bg lg:py-8">
      <motion.div
        className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-8 lg:p-12 text-center text-white shadow-lg relative w-full lg:w-[600px] max-w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Title */}
        <h2 className="text-4xl font-great mb-8">Timeline</h2>

        {/* Timeline */}
        <div className="flex flex-col gap-12">
          {/* First Look */}
          <div className="flex items-center gap-4">
            <div className="flex-1 text-right">
              <p className="text-2xl lg:text-3xl font-semibold font-great">
                08:30
              </p>
              <p className="text-base lg:text-xl uppercase">Đón khách</p>
              <p className="text-base lg:text-xl uppercase tracking-tighter">
                Welcome guests
              </p>
            </div>
            <div className="w-[30px] flex-shrink-0">
              <Image
                src="/images/flower.svg"
                alt="Camera Icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="flex-1 h-[1px] bg-white/50"></div>
          </div>
          {/* Welcome Guests */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-white/50"></div>
            <div className="w-[40px] flex-shrink-0">
              <Image
                src="/images/cheer.svg"
                alt="Flower Icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-2xl lg:text-3xl font-semibold font-great">
                09:00
              </p>
              <p className="text-base lg:text-xl uppercase">Dùng tiệc</p>
              <p className="text-base lg:text-xl uppercase">Wedding party</p>
            </div>
          </div>
          {/* Ceremony */}
          <div className="flex items-center gap-4">
            <div className="flex-1 text-right">
              <p className="text-2xl lg:text-3xl font-semibold font-great">
                10:30
              </p>
              <p className="text-base lg:text-xl uppercase">Lễ vuy quy</p>
              <p className="text-base lg:text-xl uppercase">Ceremony</p>
            </div>
            <div className="w-[40px] flex-shrink-0">
              <Image
                src="/images/ring.svg"
                alt="Rings Icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="flex-1 h-[1px] bg-white/50"></div>
          </div>
          {/* Dinner */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-white/50"></div>
            <div className="w-[40px]  flex-shrink-0">
              <Image
                src="/images/camera.svg"
                alt="Dinner Icon"
                width={80}
                height={80}
                layout="responsive"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-2xl lg:text-3xl font-semibold font-great">
                11:30
              </p>
              <p className="text-base lg:text-xl uppercase">Chụp hình</p>
              <p className="text-base lg:text-xl uppercase">First look</p>
            </div>
          </div>
          <div>
            <p className="text-sm lg:text-base italic mt-6">
              Chúng mình rất trân trọng sự có mặt của bạn trong ngày quan trọng
              nhất của cuộc đời. ự hiện diện của bạn là niềm vinh hạnh cho gia
              đình chúng mình!
            </p>
            <p className="text-base lg:text-lg mt-6 font-great">
              Huế & Chiến with Love
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
