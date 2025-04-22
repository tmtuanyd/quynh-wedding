"use client";

import { useEffect, useState } from "react";

export default function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(target - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const getTimeParts = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeParts(timeLeft);

  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Còn lại</h2>
      <div className="flex justify-center gap-6 text-pink-700 text-2xl font-semibold">
        <TimeBlock label="Ngày" value={days} />
        <TimeBlock label="Giờ" value={hours} />
        <TimeBlock label="Phút" value={minutes} />
        <TimeBlock label="Giây" value={seconds} />
      </div>
    </section>
  );
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
