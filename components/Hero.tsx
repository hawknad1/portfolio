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
    <div className="flex flex-row xl:items-center bg-[#cae3fb] items-center xl:h-screen">
      <div className="px-10 py-20 xl:px-16  xl:max-w-3xl">
        <p className="font-semibold text-2xl xl:text-6xl text-[#0A2647]">
          Hello👋🏽, I Am
        </p>
        <h1 className="font-bold text-4xl xl:text-7xl text-[#7C3E66]">
          <span>{text}</span>
          <Cursor cursorColor="#0A2647" />
        </h1>
        <p className="py-6 text-gray-600 font-thin text-lg">
          A self-taught front-end developer, based in Sakumono, Accra-Ghana. I
          have just over 2 years of experience as a junior software engineer
          with Front-end Technologies like React/React Native, NextJs and more.
        </p>
        <button className="bg-[#0A2647] w-48 p-4 rounded-full text-lg text-white font-semibold">
          Hire Me
        </button>
      </div>

      <div className="hidden xl:flex  h-[460px] w-[600px]">
        <Image src={profile} className="object-contain" alt="" />
      </div>
    </div>
  );
}

// <div className="flex flex-row space-x-52 bg-[#cae3fb] items-center xl:h-screen">
//       <div className="px-10 py-20 xl:px-16  xl:max-w-3xl border border-gray-600 ">
//         <p className="font-semibold text-2xl xl:text-6xl text-[#0A2647]">
//           Hello👋🏽, I Am
//         </p>
//         <h1 className="font-bold text-4xl xl:text-7xl text-[#7C3E66]">
//           <span>{text}</span>
//           <Cursor cursorColor="#0A2647" />
//         </h1>
//         <p className="py-6 text-gray-600 font-thin text-lg">
//           A self-taught front-end developer, based in Sakumono, Accra-Ghana. I
//           have just over 2 years of experience as a junior software engineer
//           with Front-end Technologies like React/React Native, NextJs and more.
//         </p>
//         <button className="bg-[#0A2647] w-48 p-4 rounded-full text-lg text-white font-semibold">
//           Hire Me
//         </button>
//       </div>

//       <div className="hidden xl:flex xl:absolute xl:right-48 xl:mt-36 ml-16 ">
//         <Image
//           src={profile}
//           className="object-contain h-[460px] w-[500px] border border-gray-600"
//           alt=""
//         />
//       </div>
//     </div>
