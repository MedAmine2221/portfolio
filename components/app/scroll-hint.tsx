"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollHint({
  direction = "down",
  label,
  next,
  prev,
}: {
  direction?: "up" | "down";
  label: string;
  next?: string;
  prev?: string;
}) {
  const router = useRouter();
  const Icon = direction === "down" ? ChevronDown : ChevronUp;

  const handleClick = () => {
    if (next) {
      router.push(next);
    } else if (prev) {
      router.push(prev);
    }
  };

  return (
    <AnimatePresence>
      <motion.button
        animate={{ opacity: 1, y: 0 }}
        className={`${
          direction === "down" ? "bottom-10" : "top-24"
        }flex flex-col items-center gap-1
        text-default-500 hover:text-primary transition-colors duration-300`}
        exit={{ opacity: 0, y: direction === "down" ? 20 : -20 }}
        initial={{ opacity: 0, y: direction === "down" ? -20 : 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center">
          <motion.span
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            className="text-xl tracking-widest uppercase"
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {label}
          </motion.span>
          <motion.div
            animate={{
              y: direction === "down" ? [0, 15, 0] : [0, -15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={40} strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.button>
    </AnimatePresence>
  );
}