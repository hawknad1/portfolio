import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

type Props = {};

export default function Header({}: Props) {
  const [active, setActive] = useState("");

  const handleActive = () => {
    setActive("clicked");
  };

  return (
    <header className="bg-[#cae3fb] sticky top-0 z-20">
      <div className="h-16 flex flex-row items-center max-w-7xl mx-auto justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            url="https://github.com/hawknad1"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://web.facebook.com/hawknad1"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/dankwah-thomas-a060b0239/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/Hawknad1"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.ul
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <div>
            <div className="md:hidden xl:hidden">
              <Bars3Icon className="h-7 w-7" color="black" />
            </div>
            <div className="hidden md:inline-flex flex-row space-x-12 mr-8">
              <Link href="#hero">
                <button className={`navLinks`}>Home</button>
              </Link>
              <Link href="#portfolio">
                <button className={`navLinks `}>Portfolio</button>
              </Link>
              <Link href="#about">
                <button className={`navLinks`}>About</button>
              </Link>
              <Link href="#skills">
                <button className={`navLinks`}>Skills</button>
              </Link>
              <Link href="#contact">
                <button className={`navLinks `}>Contact</button>
              </Link>
            </div>
          </div>
        </motion.ul>
      </div>
    </header>
  );
}
