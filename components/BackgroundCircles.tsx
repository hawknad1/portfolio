import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex bottom-20 justify-center items-center">
      <div className="bg-[#7DE5ED]  border-[#7DE5ED] w-[450px] h-[450px] backgroundCircle" />
      <div className="bg-[#81C6E8]  border-[#81C6E8] w-[400px] h-[400px] backgroundCircle" />
      <div className="bg-[#5DA7DB]  border-[#5DA7DB] w-[350px] h-[350px] backgroundCircle" />
      <div className="bg-[#5837D0] border-[#5837D0] w-[300px] h-[300px] backgroundCircle" />
      <div className="bg-[#5837D0] mt-52 absolute border-[#5837D0] w-[200px] h-[200px] rounded-full animate-ping" />
    </div>
  );
}
