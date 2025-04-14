"use client"

import {useRef} from "react";
import {motion, MotionConfig, useInView} from "framer-motion";
import localFont from "next/font/local";
import Countdown from "@/app/components/Countdown";
import MapComponent from "@/app/components/map";
import NavBar from "@/app/components/navbar";


const font = localFont({src: "../../../public/gianteh.otf"});

export default function Page() {
    const ref = useRef(null);

    const isInView = useInView(ref, {once: false, amount: "some"});


    return (
        <MotionConfig transition={{
            duration: .30,
            ease: "linear",
        }}>
            <div className="w-screen h-screen text-center relative overflow-hidden">

                {/**  PAGE BACKGROUND*/}
                <motion.img
                    src="/resources/page 2 bg.png"
                    alt="border"
                    className="w-screen h-screen absolute"
                />

                <motion.p
                    className={`${font.className} text-[5vw] w-screen text-white font-bold absolute top-[23vw] left-1/2 -translate-x-1/2`}>
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

                {verticalBorder("top-[28vh]", true, isInView)}
                {verticalBorder("top-[55vh]", true, isInView)}
                {verticalBorder("top-[80vh]", true, isInView)}
                {verticalBorder("top-[28vh]", false, isInView)}
                {verticalBorder("top-[55vh]", false, isInView)}
                {verticalBorder("top-[80vh]", false, isInView)}

                <div
                    className="w-[90vw] h-[80vh] gap-[20px] absolute bottom-[5vw] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">


                    {/** LOCATION CONTAINER */}
                    <div className="relative">
                        <motion.img
                            src="/resources/page 2 info.png"
                            alt="border"
                            className="w-[85vw]"
                        />
                        {details}
                    </div>


                    {/** COUNTDOWN*/}
                    <Countdown/>
                    

                    {/** MAP LOCATION */}
                    <motion.div className="w-[85vw] h-[43vw]"

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

                <NavBar/>

                {/** HIT BOX PURPOSES*/}
                <div
                    ref={ref}
                    className="w-2 h-[90vh]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
        </MotionConfig>
    );
}

const details = <div
    className="bg-pink-600 inset-1 flex flex-col justify-evenly text-[3.5vw] font-bold p-[20px] items-center absolute"
    style={{
        backgroundColor: "red",
        backgroundImage:
            "linear-gradient(45deg, #0e3168, #001138, #0e3168, #001138, #0e3168, #001138)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }}
>
    <span>
        Friday, May 9, 2025</span>
    <span> from 3:00 to 10:00 PM </span>
    <span>8 Waves Waterpark and Hotel </span>
    <span>Ulingao, San Rafael, Bulacan</span>
</div>


const verticalBorder = (top: string, isLeft: boolean, inView: boolean) => <motion.img
    src="/resources/border.png"
    alt="border"
    className={`w-[55vw] absolute ${top} ${isLeft ? "left-[-29vw] rotate-[90deg]" : "right-[-29vw] rotate-[-90deg]"}`}


    animate={{
        translateY: inView ? "0px" : "100px",
        opacity: inView ? 1 : 0,
    }}
/>
