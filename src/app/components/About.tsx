"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center green-gradient px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-2xl space-y-8 justify-center">
        <Image
          src="/images/about.svg"
          alt="Wedding"
          width={136}
          height={83}
          className="mx-auto"
        />
        <p className="text-[30px] md:text-[32px] font-great pt-8">
          Tới dự lễ thành hôn của hai chúng tôi
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-[52px] font-great yellow-text">
            Trần Thị Mai Huế
          </h2>
          <p className="text-3xl md:text-5xl font-clicker">&</p>
          <h2 className="text-4xl md:text-[52px] font-great yellow-text">
            Phan Thế Chiến
          </h2>
        </div>
        <div>
          <div className="md:pt-4">
            <h3 className="text-2xl md:text-[34px]  uppercase">
              CHỦ NHẬT <span className="text-[45px] md:text-[90px]">18</span>{" "}
              tháng 5 2025
            </h3>
            <p className="text-base md:text-[24px] mt-4">
              <span className="mr-2">|</span>09:00-11:00{" "}
              <span className="mr-2">|</span>Tại nhà riêng
            </p>
            <p className="text-base md:text-[22px] italic mt-3">
              Đội 7, thôn Xuân Phú, xã Xuân Phú, thành phố Bắc Giang, Bắc Giang
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-[40px] pt-8">
          <div className="w-[100px] lg:w-[216px]">
            <Image
              src="/images/decor-left.svg"
              alt="Wedding"
              width={216}
              height={153}
              layout="responsive"
            />
          </div>
          <div className="w-[100px] lg:w-[216px]">
            <Image
              src="/images/decor-right.svg"
              alt="Wedding"
              width={216}
              height={153}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
