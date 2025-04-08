"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

export default function Countdown() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  const targetDate = new Date("2025-05-09T15:00:00"); // Target date: May 9, 2025 at 3:00 PM

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval); // Stop the countdown once the target date is reached
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  return (
    <div className="flex gap-[10px] flex-1 items-center">
      <Tile isInView={isInView} ref={ref} dur={timeLeft.days} label="DAYS" />
      <Tile isInView={isInView} ref={ref} dur={timeLeft.hours} label="hours" />
      <Tile
        isInView={isInView}
        ref={ref}
        dur={timeLeft.minutes}
        label="minutes"
      />
      <Tile
        isInView={isInView}
        ref={ref}
        dur={timeLeft.seconds}
        label="seconds"
      />
    </div>
  );
}

function Tile({
  label,
  dur,
  ref,
  isInView,
}: {
  label: string;
  dur: any;
  ref: RefObject<null>;
  isInView: boolean;
}) {
  return (
    <motion.div
      ref={ref}
      style={{
        position: "relative",
        border: "solid 1px var(--primary)",
        borderRadius: "10px",
        color: "var(--primary)",
      }}
      className="h-[100px] flex flex-col justify-center flex-[1]"
      animate={{ scale: isInView ? 1 : 0 }}
      exit={{ scale: 0 }}
    >
      <AnimatePresence>
        <motion.span
          key={dur}
          className="text-[20px] absolute place-self-center transform-[translateY(-10px)]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            transform: "translateY(-30px)",
            opacity: 0,
          }}
          transition={{
            duration: 0.,
          }}
        >
          {dur}
        </motion.span>
      </AnimatePresence>
      <span className="absolute bottom-[20px] place-self-center">{label}</span>
    </motion.div>
  );
}
