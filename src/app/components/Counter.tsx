import React, { useEffect, useState } from "react";

const Counter = () => {
  const weddingDate = new Date("2025-05-18T08:00:00"); // Ngày cưới
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="w-full  flex flex-col items-center justify-center  text-black">
      <p className="font-style text-4xl">Countdown</p>
      <div className="text-center font-medium text-xl">
        <p>
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
          {timeLeft.seconds} Seconds
        </p>
        <p className="font-great mt-4">Until the Wedding Day!</p>
      </div>
    </section>
  );
};

export default Counter;
