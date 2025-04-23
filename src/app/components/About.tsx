"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col text-black items-center justify-center gap-8 wedding-gradient"
    >
      <div className="text-center max-w-2xl justify-center">
        <Image
          src="/images/about.svg"
          alt="Wedding"
          width={136}
          height={83}
          className="mx-auto filter invert"
        />
        <div className="mt-8">
          <div>
            <p className="font-great text-[35px] lg:text-[45px]">Thư mời</p>
            <p className="text-[15px] lg:text-[25px]">
              TRÂN TRỌNG KÍNH MỜI BẠN ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH
            </p>
          </div>

          <motion.div
            className="flex flex-col gap-4 my-8"
            initial={{ opacity: 0, y: 50 }} // Trạng thái ban đầu
            whileInView={{ opacity: 1, y: 0 }} // Trạng thái khi xuất hiện trong khung nhìn
            viewport={{ once: false, amount: 0.5 }} // Hiệu ứng chạy lại khi cuộn
            transition={{ duration: 1 }}
          >
            <p className="text-4xl lg:text-[52px] font-great yellow-text mx-auto">
              Trần Thị Mai Huế
            </p>
            <p className="text-3xl lg:text-5xl font-clicker">&</p>
            <p className="text-4xl lg:text-[52px] font-great yellow-text mx-auto">
              Phan Thế Chiến
            </p>
          </motion.div>
          <div>
            <div className="lg:pt-4">
              <h3 className="text-2xl lg:text-[34px]  uppercase tracking-tighter">
                CHỦ NHẬT <span className="text-[45px] lg:text-[90px]">18</span>{" "}
                tháng 5 2025
              </h3>
              <p className="text-base lg:text-[24px] mt-4">
                <span className="mr-2">|</span>08:30-11:00{" "}
                <span className="mr-2">|</span>Tại tư gia nhà gái
              </p>
              <p className="text-base lg:text-[22px] italic mt-3">
                Đội 7, thôn Xuân Phú, xã Xuân Phú, thành phố Bắc Giang, Bắc
                Giang
              </p>
              <p className="text-base lg:text-[22px] italic mt-6">
                Rất hân hạnh được đón tiếp
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[40px] pt-8 relative">
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

          <div className="flex items-center absolute gap-2">
            <a
              href="tel:0975294512"
              className="flex items-center justify-center w-[40px] h-[40px] gap-2 bg-[#bd9976] text-white rounded-full shadow-md transition"
            >
              <Image
                src="/images/phone.svg"
                alt="Location"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://maps.app.goo.gl/B9ev2rTtPUoK3WYP7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] gap-2 bg-[#bd9976] text-white rounded-full shadow-md transition"
            >
              <Image
                src="/images/map.svg"
                alt="Location"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
