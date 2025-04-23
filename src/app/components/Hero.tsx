"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const daysInMonth = 31;
  const startDay = 3;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-white hero-bg relative"
    >
      {/* Nội dung chính */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-great">
          We Are Getting Married!
        </h1>
        <p className="text-[26px] lg:text-4xl font-great">
          Join us to celebrate our special day
        </p>
      </div>

      {/* Lịch */}
      <div className="mt-12 text-center ">
        <p className="text-base lg:text-xl font-bold">MAY 2025</p>
        <div className="grid grid-cols-7 gap-2 text-sm lg:text-base mt-4">
          {/* Hiển thị các ngày trong tuần */}
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <span key={day} className="font-semibold text-center">
              {day}
            </span>
          ))}

          {/* Thêm các ô trống để căn chỉnh ngày bắt đầu */}
          {Array(startDay)
            .fill(null)
            .map((_, i) => (
              <span key={`empty-${i}`} className="w-full aspect-square" />
            ))}

          {/* Hiển thị các ngày trong tháng */}
          {Array(daysInMonth)
            .fill(null)
            .map((_, i) => {
              const day = i + 1;
              return day === 18 ? (
                <motion.span
                  key={day}
                  className="relative flex items-center justify-center w-full aspect-square"
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
                  className="w-full aspect-square flex items-center justify-center"
                >
                  {day}
                </span>
              );
            })}
        </div>
      </div>
      <div className="absolute bottom-20 lg:bottom-10">
        <p className="uppercase text-wxl text-center">
          Quyết định bên nhau trọn đời
        </p>
        <p className="font-great text-2xl text-center">Save the date</p>
      </div>
    </section>
  );
}
