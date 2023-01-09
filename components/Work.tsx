import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IMAGE } from "../constants/images";

type Props = {};

export default function Work({}: Props) {
  return (
    <div className="bg-white p-9">
      <div className="text-center ">
        <h1 className="uppercase tracking-[20px] text-2xl text-gray-500 mb-10">
          Portfolio
        </h1>

        <div className=" md:grid md:grid-cols-2 xl:grid-cols-3 justify-center p-10 md:p-6 ">
          {IMAGE.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="cursor-pointer p-4 "
            >
              <Image
                src={item.image}
                height={400}
                width={400}
                alt=""
                className="rounded-xl opacity-80 hover:opacity-100"
              />
              <h2>{item.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
