import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { INFO } from "../constants/images";
import Link from "next/link";

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <div className="bg-white py-8 xl:py-24">
      <div className="text-center ">
        <h1 className="uppercase tracking-[20px] text-2xl text-gray-500 xl:mb-0 ">
          Portfolio
        </h1>

        <div className=" md:grid md:grid-cols-2 xl:grid-cols-3 justify-center p-10 md:p-6 ">
          {INFO.map((item, index) => (
            <Link href={item.link} className=" mr-auto ml-auto">
              <motion.div
                key={index}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="cursor-pointer p-4"
              >
                <Image
                  src={item.image}
                  height={350}
                  width={350}
                  alt=""
                  className="rounded-xl opacity-80 hover:opacity-100"
                />
                <h2 className="uppercase text-center text-lg font-semibold tracking-widest text-gray-600 p-2">
                  {item.title}
                </h2>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
