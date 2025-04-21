"use client";

import Image from "next/image";
import bg from "@/public/resources/page 3 4 5 6 bg.png";
import {motion, MotionConfig} from "framer-motion";
import {useEffect, useRef} from "react";
import NavBar from "@/app/components/navbar";
import HighlightsComp from "@/app/components/HightLights";
import {Howl} from "howler";

export default function Page() {

    const soundRef = useRef<Howl | null>(null);


    useEffect(() => {
        soundRef.current = new Howl({src: ['/music/page 4 music.mp3'], loop: true, volume: 1, autoplay: true,},);

        let state = soundRef.current.state()

        soundRef.current.play();


        return () => {
            soundRef.current?.stop();
        }

    }, []);

    return <MotionConfig transition={{
        ease: "linear",
        duration: .35,
        delay: .600,
    }}>
        <div className="w-screen h-screen flex flex-col justify-evenly box-border relative text-white overflow-hidden">
            <Image
                src={bg}
                alt={"image"}
                className="absolute z-0 w-screen h-screen"
            ></Image>

            {/**  LOGO */}
            <motion.img
                src="/resources/NGTC Logo_GOLD.png"
                alt="border"
                className="w-[15vw] absolute top-[19vw] left-1/2 -translate-x-1/2"

                animate={{
                    scale: [0, 1],
                }}
            />


            {/**  BORDERS */}

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
                    opacity: [0, 1]
                }}


            />

            <motion.img
                src="/resources/border.png"
                alt="border"
                className="w-[100vw] absolute top-[7vw] left-[-78vw]"

                animate={{
                    opacity: [0, 1]
                }}
            />


            {verticalBorder("top-[30vh]", true)}
            {verticalBorder("top-[56vh]", true)}
            {verticalBorder("top-[83vh]", true)}
            {verticalBorder("top-[30vh]", false)}
            {verticalBorder("top-[56vh]", false)}
            {verticalBorder("top-[83vh]", false)}


            {/**  HIGHLIGHT VIDEOS */}
            <div
                className="w-[90vw] h-[78vh] gap-[60px]  absolute bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col p-[20px] overflow-y-auto">

                <HighlightsComp
                    link="https://www.youtube.com/watch?v=P3u9YF7qALM"
                    title={"Plaridel Graduation Ball 2024"}
                    url={"https://firebasestorage.googleapis.com/v0/b/isafe-fcac7.appspot.com/o/bgtc%2FPLARIDEL.mp4?alt=media&token=ad967634-6169-4c10-b1a7-863b1265f612"}/>
                <HighlightsComp
                    link="https://www.youtube.com/watch?v=d1GBIIpIH0s"
                    title={"San Simon Graduation Ball 2024"}
                    url={"https://firebasestorage.googleapis.com/v0/b/isafe-fcac7.appspot.com/o/bgtc%2FSANSIMON.mp4?alt=media&token=1d490317-62f0-4de5-8e91-b9d312e200d5"}/>


            </div>

            {/** NAV BAR*/}
            <NavBar/>
        </div>
    </MotionConfig>
}


const verticalBorder = (top: string, isLeft: boolean) => <motion.img
    src="/resources/border.png"
    alt="border"
    className={`w-[55vw] absolute ${top} ${isLeft ? "left-[-29vw] rotate-[90deg]" : "right-[-29vw] rotate-[-90deg]"}`}

    animate={{
        translateY: ["100px", "0px"],
        opacity: [0, 1],
    }}
/>


