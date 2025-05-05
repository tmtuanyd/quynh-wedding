import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/album/1.jpg",
  "/images/album/2.jpg",
  "/images/album/3.jpg",
  "/images/album/4.jpg",
  "/images/album/5.jpg",
  "/images/album/6.jpg",
  "/images/album/7.jpg",
  "/images/album/8.jpg",
  "/images/album/9.jpg",
  "/images/album/10.jpg",
  "/images/album/11.jpg",
  "/images/album/12.jpg",
  "/images/album/13.jpg",
  "/images/album/14.jpg",
];

const leftAnimation = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const rightAnimation = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const Album = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      <h2 className="text-center text-4xl font-great mb-8">Wedding Album</h2>
      <div className="flex flex-col gap-2">
        {/* First Row */}
        <div className="grid grid-cols-3 gap-2">
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
              className="w-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={images[2]}
              alt="Photo 3"
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-3 gap-2">
          <motion.div
            className="grid grid-rows-2 gap-2"
            variants={leftAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={images[3]}
              alt="Photo 2"
              className="w-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={images[4]}
              alt="Photo 3"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="col-span-2 "
            variants={rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={images[5]}
              alt="Photo 1"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Album;
