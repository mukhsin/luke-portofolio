"use client";

import WorkSliderButtons from "@/components/WorkSliderButtons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// icons
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Swiper as SwiperClass } from "swiper/types";

type Stack = {
  name: string;
};
type Project = {
  code: string;
  title: string;
  description: string;
  category: string;
  image: string;
  stack: Stack[];
  live: string;
  github: string;
};
const projects: Project[] = [
  {
    code: "01",
    title: "Project 01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus explicabo facere incidunt laudantium sequi!",
    category: "frontend",
    image: "/assets/work/thumb1.png",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    live: "",
    github: "",
  },
  {
    code: "02",
    title: "Project 02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus explicabo facere incidunt laudantium sequi!",
    category: "fullstack",
    image: "/assets/work/thumb2.png",
    stack: [{ name: "NextJS" }, { name: "TailwindCSS" }, { name: "NodeJS" }],
    live: "",
    github: "",
  },
  {
    code: "03",
    title: "Project 03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus explicabo facere incidunt laudantium sequi!",
    category: "frontend",
    image: "/assets/work/thumb3.png",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "JavaScript" },
    ],
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[32px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[24px] xl:gap-[32px]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.code}
              </div>

              {/* project category */}
              <h2 className="text-[48px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-md text-accent px-3 rounded-xl border-white/40 border-2"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              {/* border */}
              <p className="border border-white/20"></p>

              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[72px] h-[72px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[72px] h-[72px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[480px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[420px] relative group flex justify-center items-center bg-green-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    <div className="w-full h-full relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_24px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-normal"
                buttonStyles="bg-accent hover:bg-accent text-primary text-[24px] w-[42px] h-[42px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
