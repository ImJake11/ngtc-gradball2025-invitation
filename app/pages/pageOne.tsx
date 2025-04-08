"use client";

import { useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import { useInView } from "framer-motion";

export default function PageOne() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        bounce: 1,
      }}
    >
      <div className="max-w-[720px] min-h-screen p-[30px] flex flex-col items-center justify-end text-center gap-[25px]">
        <motion.p
          ref={ref}
          className="text-[1rem] font-bold pr-[40px] pl-[40px]"
          animate={{ scale: isInview ? 1 : 0 }}
          style={{
            color: "var(--primary)",
          }}
        >
          "Enchanted Masquerade: A Night of Mystery & Elegance"
        </motion.p>
        <p className="font-bold text-white text-[12px]">
          SHS Graduation Ball 2025
        </p>
        <div className="h-[30px]"></div>
        <motion.div
          ref={ref}
          style={{
            backgroundColor: "rgba(255, 255, 255, .200)",
          }}
          className="flex flex-col gap-[20px] text-[12px] text-white w-fit h-fit p-[30px] rounded-[10px]"
          animate={{
            transform: isInview ? "translateY(0px)" : "translateY(300px)",
          }}
        >
          <p className="font-bold">
            Welcome to Enchanted Masquerade: A Night of Mystery & Elegance
          </p>
          <p className="font-normal">
            Step into a world of intrigue and enchantment, where masked faces
            conceal secrets and the air is filled with anticipation. Immerse
            yourself in a realm of timeless elegance, where every glance holds a
            story and every dance is a whispered mystery.
          </p>

          <p>
            Draped in opulence and adorned in mystique, this evening promises an
            unforgettable journey through the extraordinary. So, don your finest
            attire, adjust your mask, and prepare for a night where reality
            fades and the magic of the masquerade takes hold.
          </p>
          <p>Let the mystery unfold and the enchantment begin!</p>
        </motion.div>
        <div className="h-[50px]"></div>
      </div>
    </MotionConfig>
  );
}
