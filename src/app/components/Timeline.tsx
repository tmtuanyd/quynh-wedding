"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const events = [
    {
      time: "08:00",
      title: "Đón khách",
      description: "Chào đón bạn bè và người thân đến chung vui cùng gia đình.",
    },
    {
      time: "09:00",
      title: "Lễ cưới",
      description:
        "Khoảnh khắc thiêng liêng – chúng tôi chính thức nên duyên vợ chồng.",
    },
    {
      time: "10:00",
      title: "Tiệc cưới",
      description: "Bữa tiệc ấm cúng, ngập tràn tiếng cười và lời chúc phúc.",
    },
    {
      time: "12:00",
      title: "Chụp hình lưu niệm",
      description: "Ghi lại những khoảnh khắc đẹp đẽ bên gia đình và bạn bè.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <motion.h2
        className="text-3xl text-pink-700 font-cursive text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Lịch trình ngày cưới
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <div className="w-24 text-right">
              <div className="text-xl font-bold text-pink-600">
                {event.time}
              </div>
            </div>
            <div className="border-l-2 border-pink-300 pl-4">
              <h3 className="text-lg font-semibold text-pink-800">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
