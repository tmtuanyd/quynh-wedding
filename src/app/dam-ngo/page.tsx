import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen damngo-bg flex relative items-center justify-center flex-col">
      <p className="font-great text-6xl sm:text-8xl lg:text-[10rem] text-white/95 drop-shadow-lg mt-[80px] text-center px-4">
        Lễ Dạm Ngõ
      </p>
      <p className="font-clicker text-4xl sm:text-6xl lg:text-8xl text-white/90 mt-4 text-center px-4">
        Tạ Như Quỳnh & Chang Shu Yu
      </p>
      <p className="text-center text-xl sm:text-2xl text-white/85 absolute bottom-12 [font-family:var(--font-playfair-display)] tracking-widest">
        05 · 04 · 2026
      </p>
    </div>
  );
};

export default page;
