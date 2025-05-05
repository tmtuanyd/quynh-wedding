import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/album/1.jpg",
  "/images/album/2.jpg",
  "/images/album/3.jpg",
  "/images/album/4.jpg",
  "/images/album/9.jpg",
  "/images/album/6.jpg",
  "/images/album/7.jpg",
];

const leftAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const rightAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const Album = () => {
  return (
    <div className="w-full max-w-6xl mx-auto  overflow-x-hidden">
      <div className="w-[100px] h-[100px] mx-auto">
        <img src="/images/heart.png" />
      </div>
      <h2 className="text-center text-black text-4xl font-great mb-8">
        Wedding Album
      </h2>
      <div className="flex flex-col gap-2">
        {/* First Row */}
        {/* <div className="grid grid-cols-3 gap-2">
          <motion.div
            className="col-span-2 "
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={images[0]}
              alt="Photo 1"
              className="w-full  object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="grid grid-rows-2 gap-2"
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={images[1]}
              alt="Photo 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={images[2]}
              alt="Photo 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div> */}
        {/* Second Row */}
        {/* <div className="grid grid-cols-3 gap-2">
          <motion.div
            className="grid grid-rows-2 gap-2"
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={images[3]}
              alt="Photo 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={images[4]}
              alt="Photo 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="col-span-2 "
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={images[5]}
              alt="Photo 1"
              className="w-full  object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div> */}
        {/* Third Row */}
        <div className="grid grid-cols-12 gap-2">
          <motion.div
            className="grid grid-rows-3 col-span-7 gap-2"
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
          >
            <div className="overflow-hidden ">
              <img
                src={images[3]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={images[1]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={images[4]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div
            className="grid grid-rows-4 col-span-5 gap-2"
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
          >
            <div className="overflow-hidden ">
              <img
                src={images[0]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={images[2]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={images[5]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={images[6]}
                alt="Photo 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Album;
