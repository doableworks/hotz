"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function TransitionVertical({ 
  children,
  viewport = { once: true, margin: "-10% 0px -10% 0px", amount: 0.1 },
  safariMobileFix = false
}: {
  children: React.ReactNode;
  viewport?: { once?: boolean; margin?: string; amount?: number };
  safariMobileFix?: boolean;
}) {
  const [isSafari, setIsSafari] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run Safari detection if safariMobileFix is enabled
    if (!safariMobileFix) return;

    // Detect Safari
    const ua = navigator.userAgent;
    const isSafariBrowser = /Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua);
    setIsSafari(isSafariBrowser);

    // For Safari, trigger animation immediately or after a small delay
    if (isSafariBrowser) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [safariMobileFix]);

  // For Safari, use different animation approach only if safariMobileFix is true
  if (safariMobileFix && isSafari) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delayChildren: 1,
        }}
      >
        {children}
      </motion.div>
    );
  }

  // For other browsers, use whileInView
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delayChildren: 1,
      }}
    >
      {children}
    </motion.div>
  );
}