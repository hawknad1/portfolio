import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SKILL } from "../constants/images";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-blue-50  flex relative flex-col text-center md:text-left xl:flex-row mx-auto items-center max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0"
    >
      <h3 className="absolute  uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profiency
      </h3>
      <div className="grid grid-cols-4 gap-5 mt-24 absolute top:36 xl:top-52">
        {SKILL.map((item, index) => (
          <Skill key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

// {SKILL.map((item, index) => (
//   <div key={index} className="grid grid-cols-4 gap-5">
//     <Skill image={item.image} />
//   </div>
// ))}
