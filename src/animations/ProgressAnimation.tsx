"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

const ProgressAnimation: React.FC<ProgressAnimationProps> = ({ 
  children, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default ProgressAnimation;
