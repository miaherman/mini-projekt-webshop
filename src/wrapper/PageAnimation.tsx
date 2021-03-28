import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const PageAnimation = (props: any) => {
  return (
    <motion.div
      className="Cv"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};

export default PageAnimation;