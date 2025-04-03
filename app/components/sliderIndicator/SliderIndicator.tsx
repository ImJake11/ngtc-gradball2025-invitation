import { motion } from "framer-motion";

export default function SliderIndicator({
  length,
  current,
}: {
  length: number;
  current: number;
}) {
  return (
    <div className="absolute flex flex-row z-[1] bottom-[20px] right-[50%] left-[40%] h-[40px] w-[125px] justify-evenly gap-1 items-center">
      {Array.from({ length: length }).map((_, index) => {
        const isCurrent = index === current;

        return (
          <motion.div
            initial={{
              transform: "translateY(50px)",
            }}
            animate={{
              transform: "translateY(0px)",
              width: isCurrent ? "15px" : "10px",
              height: isCurrent ? "15px" : "10px",
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
                border: "solid 1px var(--primary)"
            }}
          ></motion.div>
        );
      })}
    </div>
  );
}
