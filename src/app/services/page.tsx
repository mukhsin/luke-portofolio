"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

type Service = {
  code: string;
  title: string;
  description: string;
  href: string;
};
const services: Service[] = [
  {
    code: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut consequuntur doloremque iure sapiente tempora?",
    href: "",
  },
  {
    code: "02",
    title: "API Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur dicta dolore dolorem repellat veniam.",
    href: "",
  },
  {
    code: "03",
    title: "Front End Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem est officiis pariatur quod, reiciendis.",
    href: "",
  },
  {
    code: "04",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestiae perspiciatis tempore veritatis vero. Commodi!",
    href: "",
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px]"
        >
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.code}
                </div>
                <Link
                  href={service.href}
                  className="w-[64px] h-[64px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/60">{service.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
