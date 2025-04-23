"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col text-black items-center justify-center gap-8 wedding-gradient"
    >
      <div className="text-center max-w-2xl space-y-8 justify-center">
        <Image
          src="/images/about.svg"
          alt="Wedding"
          width={136}
          height={83}
          className="mx-auto filter invert"
        />
        <div className="space-y-8">
          <div>
            <p className="font-great text-[35px] md:text-[45px]">Thư mời</p>
            <p className="text-[15px] md:text-[25px]">
              TRÂN TRỌNG KÍNH MỜI BẠN ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH
            </p>
          </div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }} // Trạng thái ban đầu
            whileInView={{ opacity: 1, y: 0 }} // Trạng thái khi xuất hiện trong khung nhìn
            viewport={{ once: false, amount: 0.5 }} // Hiệu ứng chạy lại khi cuộn
            transition={{ duration: 1 }}
          >
            <p className="text-4xl md:text-[52px] font-great yellow-text mx-auto">
              Trần Thị Mai Huế
            </p>
            <p className="text-3xl md:text-5xl font-clicker">&</p>
            <p className="text-4xl md:text-[52px] font-great yellow-text mx-auto">
              Phan Thế Chiến
            </p>
          </motion.div>
          <div>
            <div className="md:pt-4">
              <h3 className="text-2xl md:text-[34px]  uppercase">
                CHỦ NHẬT <span className="text-[45px] md:text-[90px]">18</span>{" "}
                tháng 5 2025
              </h3>
              <p className="text-base md:text-[24px] mt-4">
                <span className="mr-2">|</span>08:30-11:00{" "}
                <span className="mr-2">|</span>Tại tư gia nhà gái
              </p>
              <p className="text-base md:text-[22px] italic mt-3">
                Đội 7, thôn Xuân Phú, xã Xuân Phú, thành phố Bắc Giang, Bắc
                Giang
              </p>
              <div className="mt-6 ">
                <a
                  href="https://maps.app.goo.gl/B9ev2rTtPUoK3WYP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 bg-[#bd9976] text-white px-6 py-3 rounded-lg shadow-md transition"
                >
                  Xem trên Google Maps <MapPin className="text-white w-6 h-6" />
                </a>
              </div>
            </div>
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
              className="filter invert"
            />
          </div>
          <div className="w-[100px] lg:w-[216px]">
            <Image
              src="/images/decor-right.svg"
              alt="Wedding"
              width={216}
              height={153}
              layout="responsive"
              className="filter invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
