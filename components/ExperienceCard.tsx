/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[100vw]
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="Company Logo"
      />

      <div className="px-10 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">{experience.company}</p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-5 w-5 md:h-10 md:w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="Tech Logo"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg max-h-96 overflow-y-scroll pr-5
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
