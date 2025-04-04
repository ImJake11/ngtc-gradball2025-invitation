import { useRef } from "react";
import Countdown from "../components/Countdown";
import { motion, useInView } from "framer-motion";

export default function PageTwo() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="min-w-screen min-h-screen p-[20px] text-center flex flex-col">
      <motion.p className="text-[3.5rem] font-bold">
        Mark your calendar!
      </motion.p>

      <Countdown/>
      <p className="font-bold italic">
        Friday, May 9, 2025, from 3:00 to 10:00 PM{" "}
      </p>
      <p>8 Waves Waterpark and Hotel </p>
      <p>Ulingao, San Rafael, Bulacan</p>
      <div className="h-[20px]"></div>
    </div>
  );
}
