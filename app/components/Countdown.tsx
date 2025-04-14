"use client";

import {AnimatePresence, motion, useInView} from "framer-motion";
import {RefObject, useEffect, useRef, useState} from "react";

export default function Countdown() {
    const ref = useRef(null);

    const isInView = useInView(ref, {once: false});

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
                setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds});
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
    }, []);

    return (
        <div
            className="w-screen h-[100px] flex justify-center items-center gap-2.5 ">
            <Tile isInView={isInView} ref={ref} dur={timeLeft.days} label="DAYS"/>
            <Tile isInView={isInView} ref={ref} dur={timeLeft.hours} label="hours"/>
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
            className="h-[80px] w-[80px] rounded-[14px] overflow-hidden flex flex-col justify-center relative text-[var(--secondary)]"
            animate={{scale: isInView ? 1 : 0}}
            exit={{scale: 0}}
        >

            {/** BORDER IMAGE*/}
            <motion.img src="/resources/page 2 timer.png"
                        className={`absolute h-[80px] place-self-center`}
            >

            </motion.img>
            <AnimatePresence>
                <motion.span
                    key={dur}
                    className="text-[30px] font-bold absolute place-self-center -translate-y-[5px]"

                    style={{
                        backgroundColor: "red",
                        backgroundImage:
                            "linear-gradient(45deg, #0e3168, #001138, #0e3168, #001138, #0e3168, #001138)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}


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
                        duration: 0.25,
                        ease: "linear",
                    }}
                >
                    {dur}
                </motion.span>
            </AnimatePresence>
            <span className="absolute bottom-[10px] place-self-center uppercase text-[10px]">{label}</span>
        </motion.div>
    );
}
