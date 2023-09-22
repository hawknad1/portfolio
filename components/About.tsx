import Image from "next/image";
import React from "react";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 mt-56 md:mt-0 md:mb-0 w-56 h-56 object-cover flex-shrink-0  md:w-[300px] md:h-[350px] xl:w-[420px] xl:h-[480px]"
      >
        <Image src={me} alt="" className="rounded-full md:rounded-lg" />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">My Background</h4>
        <p className="text-base">
          I have just over 2 years of experience as a junior software engineer
          with Front-end Technologies. Over these years, I have created multiple
          projects and worked as a freelance web designer/developer for a couple
          of clients. I have In-depth experience in Vanilla JavaScript, React,
          and other front-end technologies. Below you will find projects I've
          completed that showcase my skills and general background in software
          development.
        </p>
      </div>
    </motion.div>
  );
}
