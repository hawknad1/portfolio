import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-blue-50 sticky top-0 z-20">
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
          <SocialIcon
            className="cursor-pointer"
            network="email"
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
          <div className="hidden md:inline-flex flex-row space-x-12 mr-8">
            <li>
              <a href="default.asp" className="font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact.asp">Projects</a>
            </li>
            <li>
              <a href="contact.asp">Skills</a>
            </li>
            <li>
              <a href="about.asp">Contact</a>
            </li>
          </div>
        </motion.ul>
      </div>
    </header>
  );
}
