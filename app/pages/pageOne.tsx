import { useRef } from "react";
import ListComponent from "../components/ListStileCom";
import ListModel from "../models/list";
import { motion, MotionConfig } from "framer-motion";
import { useInView } from "framer-motion";

export default function PageOne() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });

  return (
    <MotionConfig
      transition={{
        duration: .4,
        ease: "easeInOut",
        bounce: 1,
      }}
    >
      <div
        className="min-w-screen min-h-screen p-[20px] flex flex-col items-center text-center gap-[25px]"
        style={{
          backgroundColor: "var(--background)",
        }}
      >
        <motion.p
          ref={ref}
          className="text-[3rem] font-bold"
          animate={{ scale: isInview ? 1 : 0 }}
        >
          "Enchanted Masquerade: A Night of Mystery & Elegance"
        </motion.p>
        <p className="font-bold">SHS Graduation Ball 2025</p>
        <motion.div
          ref={ref}
          className="flex flex-col gap-[20px]"
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
      </div>
    </MotionConfig>
  );
}
