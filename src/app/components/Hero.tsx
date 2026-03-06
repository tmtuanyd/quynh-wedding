"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const daysInMonth = 30; // Tháng 4
  const startDay = 2; // 01/04/2026 là Thứ Tư

  return (
    <section
      id="hero"
      className="h-screen min-h-[100dvh] w-full flex flex-col items-center justify-end hero-bg relative pb-10 sm:pb-14 lg:pb-16"
    >
      {/* Lớp phủ sáng phía dưới — chữ dễ đọc, khớp theme */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--wedding-bg)] via-[rgba(253,248,248,0.92)] to-transparent pointer-events-none" aria-hidden />
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 mb-8 sm:mb-12 text-wedding">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-great">
            We Are Getting Married!
          </h1>
          <p className="text-[26px] lg:text-4xl font-great">
            Join us to celebrate our special day
          </p>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-base lg:text-xl font-bold">THÁNG 4 2026</p>
          <div className="grid grid-cols-7 gap-x-3 sm:gap-x-4 gap-y-px text-sm lg:text-base mt-1.5 max-w-[340px] sm:max-w-[380px] mx-auto">
            {/* Hiển thị các ngày trong tuần */}
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <span key={day} className="font-semibold text-center py-0.5 text-[10px] sm:text-xs">
                {day}
              </span>
            ))}

            {/* Thêm các ô trống để căn chỉnh ngày bắt đầu */}
            {Array(startDay)
              .fill(null)
              .map((_, i) => (
                <span key={`empty-${i}`} className="w-full min-h-[22px] sm:min-h-[24px]" />
              ))}

            {/* Hiển thị các ngày trong tháng */}
            {Array(daysInMonth)
              .fill(null)
              .map((_, i) => {
                const day = i + 1;
                return day === 5 ? (
                  <motion.span
                    key={day}
                    className="relative flex items-center justify-center w-full min-h-[22px] sm:min-h-[24px]"
                    animate={{
                      scale: [1, 1.2, 1], // Phóng to và thu nhỏ
                      opacity: [1, 0.8, 1], // Nhấn nhá độ mờ
                    }}
                    transition={{
                      duration: 1.5, // Thời gian cho một chu kỳ
                      repeat: Infinity, // Lặp lại mãi mãi
                      ease: "easeInOut", // Hiệu ứng mượt
                    }}
                  >
                    {/* SVG hình trái tim */}
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute w-full h-full text-red-500"
                      fill="currentColor"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {/* Số ngày */}
                    <span className="text-white font-bold z-10 text-[10px] lg:text-[12px]">
                      {day}
                    </span>
                  </motion.span>
                ) : (
                  <span
                    key={day}
                    className="w-full min-h-[22px] sm:min-h-[24px] flex items-center justify-center"
                  >
                    {day}
                  </span>
                );
              })}
          </div>
          <div className="mt-5 sm:mt-6">
            <p className="uppercase text-wxl text-center tracking-wider">
              Quyết định bên nhau trọn đời
            </p>
            <p className="font-great text-2xl text-center mt-1">Save the date</p>
          </div>
        </div>
      </div>
    </section>
  );
}
