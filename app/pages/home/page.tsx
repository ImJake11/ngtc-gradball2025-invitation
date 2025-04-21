"use client";

import {useEffect, useRef, useState} from "react";
import {motion, MotionConfig} from "framer-motion";
import localFont from "next/font/local";
import NavBar from "@/app/components/navbar";
import {Howl} from 'howler';

const gothic = localFont({
    src: "../../../public/centurygothic.ttf",
});

const gianteh = localFont({
    src: "../../../public/gianteh.otf",
})


export default function WelcomePage() {
    const [isLoading, setIsLoading] = useState(true);


    const soundRef = useRef<Howl | null>(null);


    useEffect(() => {
        soundRef.current = new Howl({src: ['/music/page 1 music.mp3'], loop: true, volume: 1, autoplay: true,},);

        let state = soundRef.current.state()

        soundRef.current.play();


        return () => {
            soundRef.current?.stop();
        }

    }, []);


    return <MotionConfig transition={{
        duration: .25,
        delay: .8,
        ease: "linear"
    }}>
        <motion.div
            className="w-screen h-screen relative overflow-y-auto overflow-x-hidden text-center"
        >

            <img
                src={"/resources/page 3 4 5 6 bg.webp"}
                alt={"Page one background"}

            />


            {/**  BORDERS */}

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


            <motion.div
                className="w-[55vw] h-auto absolute top-[18vw] left-1/2 traslate-y-[-50%] translate-x-[-50%]"
                animate={{
                    scale: [0, 1],
                    opacity: [0, 1],
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.55,
                    delay: 0.6,
                }}
            >
                <img src={"/resources/mask.webp"} alt="mask"/>
            </motion.div>

            {/** TEXT DATA */}


            {Title()}
            <div
                className={`w-screen absolute top-[72vw] text-white text-[2.5vw] ${gianteh.className}`}
                style={{
                    textShadow: "2px 2px 3px black, -2px -2px 3px black",
                }}
            >
                <p>SHS Graduation Ball 2025</p>
            </div>


            {Logo()}


            {/** BORDERED WELCOME CONTAINER*/}
            <img src="/resources/page 1 welcome.png" alt="welcome border"
                 className="absolute top-[85vw] left-1/2 -translate-x-1/2"/>

            {MessageBody()}

            {/** NAV BAR*/}

            <NavBar/>

        </motion.div>

    </MotionConfig>
}


const Title = () =>
    <motion.div
        className={`w-screen absolute top-[58vw] left-0 text-[3.5vw] ${gianteh.className}`}
        style={{
            textShadow:
                "2px 2px 3px black, 3px 3px 3px black, -2px -2px 3px black, -3px -3px 3px black",
        }}
        animate={{
            translateY: ["100px", "0px"],
            opacity: [0, 1],
        }}
    >
        <p
            style={{
                color: "var(--primary)",
            }}
        >
            Enchanted Masquerade:
        </p>
        <p
            style={{
                color: "var(--primary)",
            }}
        >
            A Night of Mystery & Elegance
        </p>
    </motion.div>

const Logo = () =>
    <motion.img
        src="/resources/NGTC Logo_GOLD.png"
        alt="logo"
        className="w-[11vw] absolute top-[85vw] left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
            opacity: [0, 1],
        }}
        transition={{
            ease: "linear",
            duration: 0.35,
            bounce: .5
        }}
    />

const MessageBody = () => {

    return <motion.div
        className={`${gothic.className}  flex flex-col justify-center gap-[5vw] absolute top-[145vw]  left-1/2 w-[77vw] h-[55vh] -translate-x-1/2 -translate-y-1/2 text-[2.5vw] p-[8vw] font-extrabold`}
        style={{
            backgroundColor: "red",
            backgroundImage:
                "linear-gradient(45deg, #0e3168, #001138, #0e3168, #001138, #0e3168, #001138)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }}
        animate={{
            opacity: [0, 1],
        }}

    >
        <div className="justify-center items-center flex flex-col">
            <span className="text-[2.8vw]">
                Welcome to Enchanted Masquerade:
            </span>
            <span className="text-[2.8vw]">
               A Night of Mystery & Elegance
            </span>
        </div>
        <p>
            Step into a world of intrigue and enchantment, where masked faces
            conceal secrets and the air is filled with anticipation. Immerse
            yourself in a realm of timeless elegance, where every glance holds a
            story and every dance is a whispered mystery.
        </p>
        <p>
            Draped in opulence and adorned in mystique, this evening promises an
            unforgettable journey through the extraordinary. So, don your finest
            attire, adjust your mask, and prepare for a night where reality fades
            and the magic of the masquerade takes hold.
        </p>
        <p>Let the mystery unfold and the enchantment begin!</p>
    </motion.div>
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
