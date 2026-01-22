"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -150,
          scale: 0.95,
        }}
        initial={{
          opacity: 0,
          y: 150,
          scale: 0.95,
        }}
        transition={{
          duration: 0.9,
          ease: [0.19, 1.0, 0.22, 1.0],
          opacity: { duration: 2 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
