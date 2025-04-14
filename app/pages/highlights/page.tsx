"use client";

import Image from "next/image";
import bg from "@/public/resources/page 3 4 5 6 bg.png";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import NavBar from "@/app/components/navbar";
import HighlightsComp from "@/app/components/HightLights";

export default function Page() {

    const ref = useRef(null);


    const inView = useInView(ref, {once: false, amount: "some"});

    return (
        <div className="w-screen h-screen flex flex-col justify-evenly box-border relative text-white overflow-hidden">
            <Image
                src={bg}
                alt={"image"}
                className="absolute z-0 w-screen h-screen"
            ></Image>


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
                    opacity: inView ? 1 : 0
                }}


            />

            <motion.img
                src="/resources/border.png"
                alt="border"
                className="w-[100vw] absolute top-[7vw] left-[-78vw]"

                animate={{
                    opacity: inView ? 1 : 0
                }}
            />


            {verticalBorder("top-[30vh]", true, inView)}
            {verticalBorder("top-[56vh]", true, inView)}
            {verticalBorder("top-[83vh]", true, inView)}
            {verticalBorder("top-[30vh]", false, inView)}
            {verticalBorder("top-[56vh]", false, inView)}
            {verticalBorder("top-[83vh]", false, inView)}


            {/**  HIGHLIGHT VIDEOS */}
            <div
                className="w-[90vw] h-[90vh] gap-[60px]  absolute bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col p-[20px] overflow-y-auto">

                <HighlightsComp/>
                <HighlightsComp/>
                <HighlightsComp/>


            </div>

            {/** NAV BAR*/}
            <NavBar/>
            {/** HIT BOX PURPOSES*/}
            <div
                ref={ref}
                className="w-2 h-[90vh]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            </div>
        </div>
    );
}


const verticalBorder = (top: string, isLeft: boolean, inView: boolean) => <motion.img
    src="/resources/border.png"
    alt="border"
    className={`w-[55vw] absolute ${top} ${isLeft ? "left-[-29vw] rotate-[90deg]" : "right-[-29vw] rotate-[-90deg]"}`}


    animate={{
        translateY: inView ? "0px" : "100px",
        opacity: inView ? 1 : 0,
    }}
/>


