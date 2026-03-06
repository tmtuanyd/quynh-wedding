"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col text-wedding items-center justify-center gap-8 py-16 px-4 sm:px-6 bg-gradient-to-b from-[#fdf8f8] to-[#faf5f5]"
    >
      <div className="text-center max-w-2xl w-full">
        <Image
          src="/images/about.svg"
          alt="Wedding"
          width={120}
          height={73}
          className="mx-auto opacity-80"
        />

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-great text-3xl sm:text-4xl text-[#b87070]">
            Thiệp mời
          </p>
          <p className="text-sm sm:text-base lg:text-lg tracking-[0.2em] uppercase text-wedding-secondary mt-2 [font-family:var(--font-playfair-display)]">
            Trân trọng kính mời bạn đến dự lễ cưới của chúng mình
          </p>
        </motion.div>

        {/* Tên cô dâu & chú rể */}
        <motion.div
          className="flex flex-col gap-2 my-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-great font-extralight text-wedding">
            Tạ Như Quỳnh
          </p>
          <p className="font-clicker text-2xl sm:text-3xl text-[#b87070]">
            &amp;
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-great font-extralight text-wedding">
            Chang Shu Yu
          </p>
        </motion.div>

        {/* Khối thông tin ngày & địa điểm */}
        <motion.div
          className="rounded-2xl bg-white/90 shadow-[0_8px_32px_rgba(92,64,64,0.08)] border border-[#e8d4d4]/50 px-6 py-8 sm:px-10 sm:py-10 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex flex-col gap-1 border-b border-[#e8d4d4]/60 pb-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl uppercase tracking-widest text-wedding-secondary [font-family:var(--font-playfair-display)] font-medium">
              Chủ Nhật, <span className="text-[#b87070]">05</span> Tháng 04 Năm 2026
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-wedding/90 mt-2">
              <span className="text-[#b87070]">08:30 – 11:00</span>
              <span className="mx-2">·</span>
              Tại tư gia nhà gái
            </p>
          </div>
          <p className="text-sm sm:text-base text-wedding/85 mt-5 [font-family:var(--font-playfair-display)] italic">
            Đội 7, thôn Xuân Phú, xã Xuân Phú, thành phố Bắc Giang, Bắc Giang
          </p>
          <p className="text-sm sm:text-base text-[#b87070] mt-4 font-medium [font-family:var(--font-playfair-display)]">
            Rất hân hạnh được đón tiếp!
          </p>
        </motion.div>

        {/* Trang trí & nút liên hệ */}
        <motion.div
          className="flex justify-center items-center gap-6 sm:gap-10 pt-10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-16 sm:w-24 lg:w-28 flex-shrink-0">
            <Image
              src="/images/decor-left.svg"
              alt=""
              width={112}
              height={84}
              className="w-full h-auto opacity-70"
            />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0975294512"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#b87070] text-white shadow-lg hover:bg-[#a86060] hover:shadow-xl transition-all duration-300"
              aria-label="Gọi điện"
            >
              <Image
                src="/images/phone.svg"
                alt=""
                width={22}
                height={22}
                className="invert"
              />
            </a>
            <a
              href="https://maps.app.goo.gl/B9ev2rTtPUoK3WYP7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#b87070] text-white shadow-lg hover:bg-[#a86060] hover:shadow-xl transition-all duration-300"
              aria-label="Xem bản đồ"
            >
              <Image
                src="/images/map.svg"
                alt=""
                width={22}
                height={22}
                className="invert"
              />
            </a>
          </div>

          <div className="w-16 sm:w-24 lg:w-28 flex-shrink-0">
            <Image
              src="/images/decor-right.svg"
              alt=""
              width={112}
              height={84}
              className="w-full h-auto opacity-70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
