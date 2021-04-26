import React from "react";
import { motion } from "framer-motion";

const ImageFadeIn = (props) => {
  const variants = {
    visible: (custom) => ({
      opacity: 1,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      custom={0}
      animate="visible"
      variants={variants}
    >
      {props.children}
    </motion.div>
  );
};
export default ImageFadeIn;
