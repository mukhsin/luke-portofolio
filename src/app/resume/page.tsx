"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// about data
type AboutInfo = {
  name: string;
  value: string;
};
type About = {
  title: string;
  description: string;
  info: AboutInfo[];
};
const about: About = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis libero modi nisi obcaecati quis recusandae sit. Aliquam, amet, iste!",
  info: [
    {
      name: "Name",
      value: "Luke Coleman",
    },
    {
      name: "Phone",
      value: "(+48) 321 123 123",
    },
    {
      name: "Experience",
      value: "12+ Years",
    },
    {
      name: "Skype",
      value: "luke.01",
    },
    {
      name: "Nationality",
      value: "Russian",
    },
    {
      name: "Email",
      value: "luke.01@gmail.com",
    },
    {
      name: "Freelance",
      value: "Available",
    },
    {
      name: "Language",
      value: "Russian, English, Spanish",
    },
  ],
};

// experience data
type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
};
type Experience = {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
};
const experience: Experience = {
  title: "My Experience",
  icon: "/assets/resume/badge.svg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis libero modi nisi obcaecati quis recusandae sit. Aliquam, amet, iste!",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front End Developer",
      duration: "2020 - 2022",
    },
    {
      company: "E-Commerce Startup",
      position: "Freelance Web Developer",
      duration: "2018 - 2020",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2017 - 2018",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2016 - 2017",
    },
    {
      company: "Software Developer",
      position: "Junior Developer",
      duration: "2015 - 2016",
    },
  ],
};

// educational data
type EducationItem = {
  institution: string;
  duration: string;
  degree: string;
};
type Education = {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
};
const education: Education = {
  title: "My Education",
  icon: "/assets/resume/cap.svg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis libero modi nisi obcaecati quis recusandae sit. Aliquam, amet, iste!",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front End Track",
      duration: "2022",
    },
    {
      institution: "Udemy",
      degree: "Programming Course",
      duration: "2020 - 2022",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
type SkillItem = {
  name: string;
  icon: JSX.Element;
};
type Skill = {
  title: string;
  description: string;
  items: SkillItem[];
};
const skills: Skill = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis libero modi nisi obcaecati quis recusandae sit. Aliquam, amet, iste!",
  items: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "PHP",
      icon: <FaPhp />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[32px] xl:gap-[48px]"
        >
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto xl:-mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[32px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-48 px-10 py-6 flex flex-col justify-center text-center lg:items-start gap-1 rounded-xl"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[240px] min-h-[64px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[32px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-48 px-10 py-6 flex flex-col justify-center text-center lg:items-start gap-1 rounded-xl"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[240px] min-h-[64px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[32px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[32px]">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[160px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span className="capitalize">{item.name}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[32px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[640px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 "
                    >
                      <span className="text-white/60">{item.name}</span>
                      <span className="text-xl">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
