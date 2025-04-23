import React from "react";

const BrideGroom = () => {
  return (
    <section className="relative bg-white py-16 px-1 text-black">
      <div className="flex flex-col gap-16 items-center">
        {/* Cô Dâu */}
        <div className="relative flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2 flex gap-4 relative items-center">
            <div className="relative w-[50%] h-[300px] lg:h-[400px] overflow-hidden rounded-tr-[100px]  shadow-lg">
              <img
                src="/images/gai/co dau.jpg"
                alt="Cô Dâu"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex absolute left-[45%] top-[50%] gap-1">
              <div className="w-20 h-28 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <img
                  src="/images/gai/co dau1.jpg"
                  alt="Chi tiết cô dâu 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-28 w-20 h-28 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <img
                  src="/images/gai/co dau1.jpg"
                  alt="Chi tiết cô dâu 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="mb-[80px] relative">
              <p className="text-3xl font-great italic">Mai Huế</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="italic">
              Em - một cô gái đa sầu, đa cảm, thật may mắn khi gặp được anh. Cảm
              ơn anh luôn quan tâm, chăm sóc em thật nhiều, nuông chiều những
              khi em giận hờn vô cớ. Bắt đầu từ hôm nay chúng ta sẽ viết nên một
              chương mới của cuộc đời, bằng tình thương yêu và hạnh phúc. Đồng
              đầy anh nhé!
            </p>
          </div>
        </div>

        {/* Chú Rể */}
        <div className="relative flex flex-col lg:flex-row-reverse gap-4 items-center">
          <div className="w-full lg:w-1/2 flex gap-4 relative flex-row-reverse items-center">
            <div className="relative w-[50%] h-[300px] lg:h-[400px] overflow-hidden rounded-tr-[100px]  shadow-lg">
              <img
                src="/images/trai/chu re.jpg"
                alt="Chú Rể"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex absolute right-[45%] top-[50%] gap-1">
              <div className="w-20 h-28 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <img
                  src="/images/trai/chu re1.jpg"
                  alt="Chi tiết chú rể 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-28 w-20 h-28 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <img
                  src="/images/trai/chu re1.jpg"
                  alt="Chi tiết chú rể 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="mb-[80px] relative">
              <p className="text-3xl font-great italic">Thế Chiến</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="italic">
              Anh - một chàng trai mạnh mẽ, luôn là chỗ dựa vững chắc cho em.
              Cảm ơn em đã đến bên anh, mang đến niềm vui và hạnh phúc. Anh hứa
              sẽ luôn yêu thương, bảo vệ và đồng hành cùng em trên mọi chặng
              đường phía trước.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;
