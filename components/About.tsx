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
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/564x/ac/9d/d9/ac9dd9bd998c67b9857bb65e5f879798.jpg"
        className="mb-10 mt-56 md:mb-0 w-56 h-56 rounded-full object-cover flex-shrink-0 md:rounded-lg md:w-64 md:h-95 xl:w-[420px] xl:h-[480px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">My Background</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          voluptatum vel tempore necessitatibus doloremque consequatur et quia
          ratione reprehenderit iste dignissimos, natus, quo earum praesentium
          nulla. Eius quo animi dolor. Porro obcaecati id aliquid ut architecto
          error similique quod reprehenderit vel quo consectetur adipisci quidem
          nostrum aut iure dolores, sint laborum saepe perspiciatis placeat
          quaerat. Impedit repudiandae molestias consequatur quis!
        </p>
      </div>
    </motion.div>
  );
}

// import Image from "next/image";
// import React from "react";
// import me from "../assets/me.jpeg";

// type Props = {};

// export default function About({}: Props) {
//   return (
//     <div className="bg-white h-screen">
//       <div className="text-center">
//         <h1 className="font-bold text-4xl">About Me</h1>
//         <div className="border-b-4 border-[#579BB1] w-20 mr-auto ml-auto mt-2" />
//         <div className="flex mr-auto ml-auto mt-10 p-4 w-4/5">
//           <div className="w-2/4">
//             <Image
//               src={me}
//               height={400}
//               width={420}
//               alt=""
//               className="mr-auto ml-auto "
//             />
//           </div>
//           <div className="w-2/4 p-4">
//             <h1 className="font-bold text-4xl text-start p-2">
//               A Self-taught Front-end Developer based in Accra, Ghana
//             </h1>
//             <p className="text-start p-2">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
//               enim repellat? Facilis fugiat quos doloribus autem natus
//               laboriosam ullam harum aperiam corrupti quis cum, totam odio
//               similique, ex sequi nisi.
//             </p>
//             <p className="text-start p-2">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
//               enim repellat? Facilis fugiat quos doloribus autem natus
//               laboriosam ullam harum aperiam corrupti quis cum, totam odio
//               similique, ex sequi nisi.
//             </p>
//             <div className="text-start mt-2">
//               <button className="bg-[#0A2647] w-48 p-4 hover:bg-orange-400 transition ease-out active:scale-95 rounded-full text-lg text-white font-semibold">
//                 Download CV
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// <div className="flex space-x-8 justify-center mr-auto ml-auto">
//         <div>
//           <Image src={me} height={400} width={400} alt="" />
//         </div>
//         <h1 className="font-bold text-4xl">
//           Self-taught Front-end Developer based in Accra,Ghana
//         </h1>
//       </div>
