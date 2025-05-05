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
    <section className="relative text-black">
      <div>
        <p className="font-great text-[20px]">
          Nhân danh tình yêu,hãy cùng đi hết quãng đời còn lại . Từ nay trở
          đi,đông có năng ấm ,còn mình có nhau !
        </p>
      </div>
      <div className="flex flex-col gap- items-center">
        {/* Cô Dâu */}
        <div className="relative flex flex-col  gap-4 items-center mt-12">
          <div className="w-full  flex gap-2 relative items-center">
            <div className="relative w-[55%] h-[300px] lg:h-[400px] overflow-hidden ">
              <Image
                src="/images/gai/co dau.jpeg"
                alt="Cô Dâu"
                className="object-cover w-full h-full"
                width={216}
                height={153}
                layout="responsive"
              />
            </div>
            <div className="flex absolute left-[45%] top-[35%] gap-1 w-[60%]">
              <div className="w-full  border border-white overflow-hidden">
                <Image
                  src="/images/gai/co dau1.jpg"
                  alt="Chi tiết cô dâu 1"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div>
              {/* <div className="w-15 h-20 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <Image
                  src="/images/gai/co dau2.jpg"
                  alt="Chi tiết cô dâu 2"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div> */}
            </div>

            <div className="top-[-80px] relative w-1/2">
              <p>Cô dâu</p>
              <p className="text-[40px] font-style italic tracking-[2px] text-[#B95C50]">
                Mai Huế
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <motion.p
              variants={brideTextVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="italic text-neutral-700"
            >
              Sự xuất hiện của anh trong cuộc đời em như một điều kì diệu. Anh
              như ánh nắng sưởi ấm thế giới của em, từ ngày hôm nay dưới ánh
              nắng mặt trời em sẽ luôn có hai chiếc bóng, bên trái là của em,
              bên phải cũng là của em. Chúng ta cùng viết lên một chương mới
              cuộc đời, bằng tình yêu thương và hạnh phúc đong đầy anh nhé!
            </motion.p>
          </div>
        </div>

        {/* Chú Rể */}
        <div className="relative flex flex-col  gap-4 items-center mt-4">
          <div className="w-full  flex gap-4 relative flex-row-reverse items-center">
            <div className="relative w-[50%] h-[200px] lg:h-[400px] overflow-hidden">
              <Image
                src="/images/trai/chu re.jpg"
                alt="Chú Rể"
                className="object-cover w-full h-full"
                width={216}
                height={153}
                layout="responsive"
              />
            </div>
            <div className="flex absolute right-[45%] top-[45%] gap-1 w-[60%]">
              <div className=" h-[100px] w-full lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <img
                  src="/images/trai/chu re1.jpg"
                  alt="Chi tiết chú rể 1"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* <div className="w-15 h-20 lg:w-[100px] lg:h-[150px] border border-white overflow-hidden">
                <Image
                  src="/images/trai/chu re1.jpg"
                  alt="Chi tiết chú rể 2"
                  className="object-cover w-full h-full"
                  width={216}
                  height={153}
                  layout="responsive"
                />
              </div> */}
            </div>

            <div className="mb-[80px] relative">
              <p className="text-right">Chú rể</p>
              <p className="text-[40px] font-style italic tracking-[1px] text-[#B95C50]">
                Thế Chiến
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 overflow-hidden">
            <motion.p
              variants={groomTextVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="italic text-neutral-700"
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
