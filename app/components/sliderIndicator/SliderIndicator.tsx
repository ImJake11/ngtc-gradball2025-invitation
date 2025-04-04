import { motion } from "framer-motion";

export default function SliderIndicator({
  length,
  current,
}: {
  length: number;
  current: number;
}) {
  return (
    <div className="absolute flex flex-row z-[1] bottom-0 right-[50%] left-[40%] h-[40px] w-[125px] justify-evenly gap-1 items-center">
      {Array.from({ length: length }).map((_, index) => {
        const isCurrent = index === current;

        return (
          <motion.div
            initial={{
              transform: "translateY(50px)",
            }}
            animate={{
              transform: isCurrent ? "translateY(0px)" : "translateY(5px)",
              width: "10px",
              height: "10px",
              backgroundColor: isCurrent
                ? "var(--primary)"
                : "var(--background)",
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            key={index}
            className={`rounded-full`}
            style={{
              border: "solid 1px var(--primary)",
            }}
          ></motion.div>
        );
      })}
    </div>
  );
}
