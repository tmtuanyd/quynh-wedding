import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen damngo-bg flex items-center justify-center flex-col">
      <p className="font-bold  text-[200px] text-red-300">Lễ Dạm Ngõ</p>
      <div className="flex items-center">
        <p className="text-[100px] font-great">
          Mai Huế <span className="text-red-500 mx-[30px]">❤️</span> Thế Chiến
        </p>
      </div>
      <p className="text-center mt-[30px] text-[50px]">01/05/2025</p>
    </div>
  );
};

export default page;
