import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="w-24 h-24 rounded-full object-cover border border-gray-500 md:h-28 md:w-28 xl:h-32 xl:w-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill.image).url()}
      />
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
        h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">{skill.progress}%</p>
        </div>
      </motion.div>
    </div>
  );
}
