import { motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const TOTAL_STEPS: number = 6;

const reverseIndex = (index: number) => {
  return TOTAL_STEPS - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*
             Render 6 motion divs, each representing a step of the stairs.
             Each div will have the same animation defined by the stairsAnimation object.
             The delay for each div is calculated dynamically based on its reversed index creating a staggered
             effect with decreasing delay for each subsequent step.
             */}
      {[...Array(TOTAL_STEPS)].map((_, index: number) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
