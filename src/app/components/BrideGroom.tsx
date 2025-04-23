import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BrideGroom = () => {
  const brideTextVariant = {
    hidden: { opacity: 0, x: 100 }, // Bắt đầu từ bên phải
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const groomTextVariant = {
    hidden: { opacity: 0, x: -100 }, // Bắt đầu từ bên trái
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <section className="relative bg-white  text-black">
      <div className="flex flex-col gap- items-center">
        {/* Cô Dâu */}
        <div className="relative flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2 flex gap-4 relative items-center">
            <div className="relative w-[50%] h-[200px] lg:h-[400px] overflow-hidden rounded-tr-[100px]  shadow-lg">
              <Image
                src="/images/gai/co dau.jpg"
                alt="Cô Dâu"
                className="object-cover w-full h-full"
                width={216}
                height={153}
                layout="responsive"
              />
            </div>
            <div className="flex absolute left-[45%] top-[50%] gap-1">
              <div className="w-15 h-20 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <Image
                  src="/images/gai/co dau1.jpg"
                  alt="Chi tiết cô dâu 1"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div>
              <div className="w-15 h-20 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <Image
                  src="/images/gai/co dau1.jpg"
                  alt="Chi tiết cô dâu 2"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div>
            </div>

            <div className="mb-[80px] relative">
              <p className="text-3xl font-great italic">Mai Huế</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 overflow-hidden">
            <motion.p
              variants={brideTextVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="italic"
            >
              Em - một cô gái đa sầu, đa cảm, thật may mắn khi gặp được anh. Cảm
              ơn anh luôn quan tâm, chăm sóc em thật nhiều, nuông chiều những
              khi em giận hờn vô cớ. Bắt đầu từ hôm nay chúng ta sẽ viết nên một
              chương mới của cuộc đời, bằng tình thương yêu và hạnh phúc. Đong
              đầy anh nhé!
            </motion.p>
          </div>
        </div>

        {/* Chú Rể */}
        <div className="relative flex flex-col lg:flex-row-reverse gap-4 items-center">
          <div className="w-full lg:w-1/2 flex gap-4 relative flex-row-reverse items-center">
            <div className="relative w-[50%] h-[200px] lg:h-[400px] overflow-hidden rounded-tl-[100px]  shadow-lg">
              <Image
                src="/images/trai/chu re.jpg"
                alt="Chú Rể"
                className="object-cover w-full h-full"
                width={216}
                height={153}
                layout="responsive"
              />
            </div>
            <div className="flex absolute right-[45%] top-[50%] gap-1">
              <div className="w-15 h-20 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <Image
                  src="/images/trai/chu re1.jpg"
                  alt="Chi tiết chú rể 1"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div>
              <div className="w-15 h-20 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <Image
                  src="/images/trai/chu re1.jpg"
                  alt="Chi tiết chú rể 2"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div>
            </div>

            <div className="mb-[80px] relative">
              <p className="text-3xl font-great italic">Thế Chiến</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 overflow-hidden">
            <motion.p
              variants={groomTextVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="italic"
            >
              Hạnh phúc nhất trên đời không phải là việc gặp được người tuyệt
              vời nhất ở những tháng ngày đẹp nhất. Mà là gặp một người từ từ
              nhìn mình già đi, không cần ở những năm tháng đẹp nhất, mà là đúng
              người, đúng thời điểm. Anh rất hạnh phúc vì gặp được em - người
              con gái cho anh biết thế nào là yêu. Cùng anh về nhà em nhé!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;
