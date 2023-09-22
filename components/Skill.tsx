import React from "react";
import { motion } from "framer-motion";
import { SKILL } from "../constants/images";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  image: string;
  title: string;
};

export default function Skill({ directionLeft, image, title }: Props) {
  return (
    <div>
      <div className="group flex relative cursor-pointer">
        <motion.div
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            src={image}
            alt="Image of Framework"
            className="bg-white p-2 w-20 h-20 md:w-24 md:h-24 xl:h-28 xl:w-28 rounded-full object-contain filter group-hover:grayscale"
          />
        </motion.div>
        <div className="absolute opacity-0 group-hover:opacity-80 transition rounded-full xl:h-28 xl:w-28 z-0 md:h-24 md:w-24 duration-300 ease-in-out h-20 w-20 group-hover:bg-white">
          <div className="flex items-center justify-center h-full">
            <p className="uppercase text-sm md:text-base xl:text-lg font-bold text-black opacity-100">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
