import Image from "next/image";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profile from "../assets/profile.png";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Dankwah Thomas"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-row space-x-52 bg-blue-50 h-screen">
      <div className="px-16 py-56 max-w-3xl">
        <p className="font-semibold text-6xl text-[#0A2647]">Hello👋🏽, I Am</p>
        <h1 className="font-bold text-7xl text-[#7C3E66]">
          <span>{text}</span>
          <Cursor cursorColor="#0A2647" />
        </h1>
        <p className="py-6 text-gray-600 font-thin text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aliquid rerum quae maxime eos similique dolor ex, veniam natus
        </p>
        <button className="bg-[#0A2647] w-48 p-4 rounded-full text-lg text-white font-semibold">
          Hire Me
        </button>
      </div>
      {/* <BackgroundCircles /> */}
      <div className="absolute right-48 mt-36">
        <Image src={profile} height={320} width={320} alt="" />
      </div>
    </div>
  );
}
