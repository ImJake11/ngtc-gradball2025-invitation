"use client"

import {useRef} from "react";
import {motion, MotionConfig, useInView} from "framer-motion";
import Countdown from "@/app/components/Countdown";
import MapComponent from "@/app/components/map";
import localFont from "next/font/local";


const font = localFont({src: "../../public/gianteh.otf"});

export default function PageTwo() {
    const ref = useRef(null);

    const isInView = useInView(ref, {once: false, amount: "all"});

    return (
        <MotionConfig transition={{
            duration: .30,
            ease: "linear",
        }}>
            <div ref={ref} className="w-screen h-screen text-center relative">

                {/**  PAGE BACKGROUND*/}
                <motion.img
                    src="/resources/page 2 bg.png"
                    alt="border"
                    className="w-screen h-screen absolute"
                />

                <motion.p
                    className={`${font.className} text-[1.7rem] w-screen text-white font-bold absolute top-[15vw] left-1/2 -translate-x-1/2`}>
                    Mark your calendar!
                </motion.p>


                {/** BORDERS*/}
                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[100vw] absolute top-[-14vw] left-0"
                />
                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[100vw] absolute top-[7vw] left-[78vw]"

                    animate={{
                        opacity: isInView ? 1 : 0
                    }}


                />

                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[100vw] absolute top-[7vw] left-[-78vw]"

                    animate={{
                        opacity: isInView ? 1 : 0
                    }}
                />

                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[70vw] absolute top-[55vh] left-[55vw]"


                    animate={{
                        opacity: isInView ? 1 : 0,
                        translateX: isInView ? "0px" : "100px",
                    }}
                />
                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[70vw] absolute top-[55vh] left-[-25vw]"

                    animate={{
                        opacity: isInView ? 1 : 0,
                        translateX: isInView ? "0px" : "-100px",
                    }}

                />
                <motion.img
                    src="/resources/NGTC Logo_GOLD.png"
                    alt="border"
                    className="w-[20vw] absolute top-[55vh] left-1/2 transform -translate-x-1/2"

                    animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1 : 0,
                    }}
                />

                {/** LOCATION CONTAINER */}
                <motion.div className="w-[85vw] absolute top-[30vw] left-1/2 -translate-x-1/2 relavative">
                    <motion.img
                        src="/resources/page 2 info.png"
                        alt="border"
                        className="w-[85vw] absolute"
                    />
                    {details}
                </motion.div>

                {/** COUNTDOWN*/}
                <Countdown/>

                {/** MAP LOCATION */}
                <motion.div className="w-[85vw] h-[43vw] absolute bottom-[5vh] left-1/2 -translate-x-1/2"

                            animate={{
                                translateY: isInView ? "0px" : "200px",
                                opacity: isInView ? 1 : 0,
                            }}
                >
                    <div className="relative w-[85vw]">
                        <motion.img
                            src="/resources/page 2 info.png"
                            alt="border"
                            className="w-[85vw] absolute"
                        />
                        <div className="h-[43vw] w-[85vw] absolute p-[10px]">
                            <MapComponent/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </MotionConfig>
    );
}

const details = <div
    className="h-[43vw] w-[85vw] absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-evenly text-[20px] font-bold p-[20px] items-center">
    <span>
        Friday, May 9, 2025</span>
    <span> from 3:00 to 10:00 PM </span>
    <span>8 Waves Waterpark and Hotel </span>
    <span>Ulingao, San Rafael, Bulacan</span>
</div>