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
          <p className="font-great text-3xl sm:text-4xl text-wedding-accent">
            Thiệp mời
          </p>
          <p className="text-sm sm:text-base lg:text-lg tracking-[0.2em] uppercase text-wedding-secondary mt-2 [font-family:var(--font-playfair-display)]">
            Trân trọng kính mời bạn đến dự lễ cưới của chúng mình
          </p>
        </motion.div>

        {/* Tên cô dâu & chú rể */}
        <motion.div
          className="flex flex-col gap-1 my-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-great font-extralight text-wedding">
            Tạ Như Quỳnh
          </p>
          <p className="font-clicker text-2xl sm:text-3xl text-wedding-accent">
            &amp;
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-great font-extralight text-wedding">
            Chang Shu Yu
          </p>
        </motion.div>

        {/* Khối thông tin — cấu trúc đúng như thiết kế: căn giữa, ngày 2 dòng, | giờ | địa điểm */}
        <motion.div
          className="relative w-full max-w-2xl mx-auto px-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Dòng 1: CHỦ NHẬT [số ngày to đậm] THÁNG 4 — flex items-baseline để số 05 không bị kéo xuống */}
          <div className="flex flex-wrap justify-center items-baseline gap-x-2 text-lg sm:text-xl lg:text-2xl uppercase tracking-widest text-wedding [font-family:var(--font-playfair-display)] font-medium">
            <span>Chủ Nhật</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-wedding-accent">05</span>
            <span>Tháng 4</span>
          </div>
          {/* Dòng 2: 2026 */}
          <p className="text-lg sm:text-xl lg:text-2xl uppercase tracking-widest text-wedding mt-1 [font-family:var(--font-playfair-display)] font-medium">
            2026
          </p>

          {/* | 08:30-11:00 | Tại tư gia nhà gái */}
          <p className="text-sm sm:text-base lg:text-lg text-wedding/90 mt-6 [font-family:var(--font-playfair-display)]">
            <span className="mx-1.5">|</span> 08:30-11:30 <span className="mx-1.5">|</span> Tại tư gia nhà gái
          </p>

          {/* Địa chỉ — italic, căn giữa */}
          <p className="text-sm sm:text-base text-wedding/85 mt-5 [font-family:var(--font-playfair-display)] italic max-w-md mx-auto leading-relaxed">
            TDP Long Sơn, Phường Tân An, Tỉnh Bắc Ninh
          </p>

          {/* Câu kết — italic, căn giữa */}
          <p className="text-sm sm:text-base text-wedding italic mt-6 [font-family:var(--font-playfair-display)]">
            Rất hân hạnh được đón tiếp!
          </p>
        </motion.div>

        {/* Trang trí & nút liên hệ */}
        <motion.div
          className="flex justify-center items-center gap-6 sm:gap-10 pt-12 relative"
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
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--wedding-accent)] text-white shadow-lg hover:opacity-90 transition-opacity duration-300"
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
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--wedding-accent)] text-white shadow-lg hover:opacity-90 transition-opacity duration-300"
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
