"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
            }}
            className="w-screen h-screen fixed bg-primary top-0 pointer-events-none"
          />
          {children}
        </div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
