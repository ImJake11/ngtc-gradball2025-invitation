"use client"

import {useEffect, useRef} from "react";
import {motion, MotionConfig} from "framer-motion";
import localFont from "next/font/local";
import Countdown from "@/app/components/Countdown";
import MapComponent from "@/app/components/map";
import NavBar from "@/app/components/navbar";
import {Howl} from "howler";


const font = localFont({src: "../../../public/gianteh.otf"});

export default function Page() {

    const soundRef = useRef<Howl | null>(null);


    useEffect(() => {
        soundRef.current = new Howl({src: ['/music/page 2 music.mp3'], loop: true, volume: 1, autoplay: true,},);

        let state = soundRef.current.state()

        soundRef.current.play();


        return () => {
            soundRef.current?.stop();
        }

    }, []);


    return (
        <MotionConfig transition={{
            duration: .30,
            ease: "linear",
            delay: .600,
        }}>
            <div className="w-screen h-screen text-center relative overflow-hidden">

                {/**  PAGE BACKGROUND*/}
                <img
                    src="/resources/page 3 4 5 6 bg.webp"
                    alt="border"
                    className="w-screen h-screen absolute"
                />


                {/** BORDERS*/}
                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[100vw] absolute top-[-14vw] left-0"

                    animate={{
                        translateY: ["-100px", "0px"],
                    }}
                />
                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[100vw] absolute top-[7vw] left-[78vw]"

                    animate={{
                        translateX: ["100px", "0px"],
                    }}


                />

                <motion.img
                    src="/resources/border.png"
                    alt="border"
                    className="w-[100vw] absolute top-[7vw] left-[-78vw]"

                    animate={{
                        translateX: ["-100px", "0px"],
                    }}
                />

                {verticalBorder("top-[30vh]", true)}
                {verticalBorder("top-[56vh]", true)}
                {verticalBorder("top-[83vh]", true)}
                {verticalBorder("top-[30vh]", false)}
                {verticalBorder("top-[56vh]", false)}
                {verticalBorder("top-[83vh]", false)}

                <div
                    className=" w-[90vw] h-[87vh] gap-[20px] absolute bottom-[5vw] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden">

                    {/**  LOGO */}
                    <motion.img
                        src="/resources/NGTC Logo_GOLD.png"
                        alt="border"
                        className="w-[15vw]"

                        animate={{
                            scale: [0, 1],
                        }}
                    />

                    {/** TITLE */}

                    <motion.p
                        className={`${font.className} text-[5vw] w-screen text-white font-bold -translate-y-[2.5vw]`}>
                        Mark your calendar!
                    </motion.p>


                    {/** LOCATION CONTAINER */}
                    <div className="relative">
                        <motion.img
                            src="/resources/page 2 info.png"
                            alt="border"
                            className="w-[85vw]"
                        />
                        {details}
                    </div>

                    <div className={`${font.className} text-white font-semibold text-[2.7vw] pl-[10px] pr-[10px]`}>
                        <p>
                            The night of mystery and magic is calling.
                        </p>
                        <p>
                            Get your ticket now from the Admin Office!
                        </p>
                    </div>


                    {/** IMAGE CONTAINER */}
                    <div className="w-full h-fit p-[10px]">
                        <img className="w-full" src="/resources/Graduation%20Ball%20Ticket%20Invitation.jpg"
                             alt="ticket"
                             style={{
                                 filter: "blur(2px)"
                             }}
                        />
                    </div>


                    {/** COUNTDOWN*/}
                    <Countdown/>


                    {/** MAP LOCATION */}
                    <motion.div className="w-[85vw] h-[43vw]"
                                animate={{
                                    translateY: ["200px", "0px"],
                                    opacity: [0, 1],
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


const verticalBorder = (top: string, isLeft: boolean) => <motion.img
    src="/resources/border.png"
    alt="border"
    className={`w-[55vw] absolute ${top} ${isLeft ? "left-[-29vw] rotate-[90deg]" : "right-[-29vw] rotate-[-90deg]"}`}

    animate={{
        translateY: ["100px", "0px"],
        opacity: [0, 1],
    }}
/>
