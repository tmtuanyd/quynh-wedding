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
    <section className="min-h-screen w-full flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4">
      <motion.div
        className="lg:rounded-2xl px-6 py-10 sm:px-10 lg:px-14 lg:py-14 text-center text-wedding relative w-full max-w-[600px] mx-auto bg-[var(--wedding-card)] border border-[var(--wedding-border)] shadow-[0_8px_32px_rgba(61,46,46,0.06)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto mb-8 h-px w-12 bg-[var(--wedding-accent-light)]" />
        <h2 className="text-3xl sm:text-4xl font-great text-wedding-accent">
          Timeline
        </h2>

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
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/flower.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-contain opacity-90"
                style={{ filter: "invert(1)" }}
              />
            </div>
            <div
              className="flex-1 h-[1px] opacity-70"
              style={{ backgroundColor: "var(--wedding-accent-light)" }}
            ></div>
          </div>
          {/* Welcome Guests */}
          <div className="flex items-center gap-4">
            <div
              className="flex-1 h-[1px] opacity-70"
              style={{ backgroundColor: "var(--wedding-accent-light)" }}
            ></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/cheer.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-contain opacity-90"
                style={{ filter: "invert(1)" }}
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
                11:30
              </p>
              <p className="text-base lg:text-xl uppercase">Lễ vu quy</p>
              <p className="text-base lg:text-xl uppercase">Ceremony</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/ring.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-contain opacity-90"
                style={{ filter: "invert(1)" }}
              />
            </div>
            <div
              className="flex-1 h-[1px] opacity-70"
              style={{ backgroundColor: "var(--wedding-accent-light)" }}
            ></div>
          </div>
          {/* Dinner */}
          <div className="flex items-center gap-4">
            <div
              className="flex-1 h-[1px] opacity-70"
              style={{ backgroundColor: "var(--wedding-accent-light)" }}
            ></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/camera.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-contain opacity-90"
                style={{ filter: "invert(1)" }}
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-2xl lg:text-3xl font-semibold font-great">
                12:00
              </p>
              <p className="text-base lg:text-xl uppercase">Chụp hình</p>
              <p className="text-base lg:text-xl uppercase">Photography</p>
            </div>
          </div>
          <div>
            <p className="text-sm lg:text-base italic ">
              Chúng mình rất trân trọng sự có mặt của bạn trong ngày quan trọng
              nhất của cuộc đời. Sự hiện diện của bạn là niềm vinh hạnh cho gia
              đình chúng mình!
            </p>
            <p className="text-base lg:text-lg mt-6 font-great">
              Quỳnh & Shu Yu with Love
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
