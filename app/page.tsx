"use client";

import {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import localFont from "next/font/local";
import NavBar from "@/app/components/navbar";

const gothic = localFont({
    src: "../public/centurygothic.ttf",
});

const gianteh = localFont({
    src: "../public/gianteh.otf",
})

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);

    const viewRef = useRef(null);

    const inView = useInView(viewRef, {
        once: false,
        amount: "some"
    });


    return (
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


            <motion.div
                className="w-[55vw] h-auto absolute top-[18vw] left-1/2 traslate-y-[-50%] translate-x-[-50%]"
                animate={{
                    scale: inView ? 1 : 0,
                    opacity: inView ? 1 : 0,
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


            {Title(inView)}
            <div
                className={`w-screen absolute top-[72vw] text-white text-[2.5vw] ${gianteh.className}`}
                style={{
                    textShadow: "2px 2px 3px black, -2px -2px 3px black",
                }}
            >
                <p>SHS Graduation Ball 2025</p>
            </div>


            {Logo(inView)}


            {/** BORDERED WELCOME CONTAINER*/}
            <img src="/resources/page 1 welcome.png" alt="welcome border"
                 className="absolute top-[85vw] left-1/2 -translate-x-1/2"/>

            {MessageBody(inView)}

            {/** NAV BAR*/}

            <NavBar/>

            {/** DIV PURPOSE IS TO SHOW HIT BOX FOR REFERENCE TO LOAD ALL COMPONENT EG. BORDER MASK ETC */}
            <div ref={viewRef}
                 className=" absolute w-[10px] h-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>


        </motion.div>


    );
}


const Title = (inView: boolean) =>
    <motion.div
        className={`w-screen absolute top-[58vw] left-0 text-[3.5vw] ${gianteh.className}`}
        style={{
            textShadow:
                "2px 2px 3px black, 3px 3px 3px black, -2px -2px 3px black, -3px -3px 3px black",
        }}
        animate={{
            translateY: inView ? "0px" : "100px",
            opacity: inView ? 1 : 0,
        }}
        transition={{
            ease: "linear",
            duration: 0.35,
            delay: 0.5,
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

const Logo = (inView: boolean) =>
    <motion.img
        src="/resources/NGTC Logo_GOLD.png"
        alt="logo"
        className="w-[11vw] absolute top-[85vw] left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
            opacity: inView ? 1 : 0,
        }}
        transition={{
            ease: "linear",
            duration: 0.35,
            bounce: .5
        }}
    />

const MessageBody = (inView: boolean) => {

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
            opacity: inView ? 1 : 0,
        }}

        transition={{
            duration: .35,
            ease: "easeOut",
            delay: 1.2
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


const verticalBorder = (top: string, isLeft: boolean, inView: boolean) => <motion.img
    src="/resources/border.png"
    alt="border"
    className={`w-[55vw] absolute ${top} ${isLeft ? "left-[-29vw] rotate-[90deg]" : "right-[-29vw] rotate-[-90deg]"}`}


    animate={{
        translateY: inView ? "0px" : "100px",
        opacity: inView ? 1 : 0,
    }}
/>
