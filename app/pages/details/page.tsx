"use client";

import {motion, MotionConfig} from "framer-motion";
import DetailsContent from "@/app/components/DetailsContent";
import AnimatedTitle from "@/app/components/AnimatedTitle";
import {useEffect, useRef} from "react";
import NavBar from "@/app/components/navbar";
import {Howl} from "howler";


export default function Page() {

    const soundRef = useRef<Howl | null>(null);


    useEffect(() => {
        soundRef.current = new Howl({src: ['/music/page 3 music.mp3'], loop: true, volume: 1, autoplay: true,},);

        let state = soundRef.current.state()

        soundRef.current.play();


        return () => {
            soundRef.current?.stop();
        }

    }, []);


    return <MotionConfig transition={{
        duration: .35,
        ease: "linear",
        delay: .600,
    }}>
        <div className="w-screen h-screen relative overflow-y-auto overflow-x-hidden">

            {/**  BACKGROUND IMAGE*/}
            <img src="/resources/page%203%204%205%206%20bg.webp" alt="bg"
                 className="w-screen h-screen absolute"
            />

            {/**  BORDERS*/}
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


            {/**  LOGO */}
            <motion.img
                src="/resources/NGTC Logo_GOLD.png"
                alt="border"
                className="w-[15vw] absolute top-[19vw] left-1/2 -translate-x-1/2"

                animate={{
                    scale: [0, 1],
                }}
            />


            {/** BODY CONTAINER */}

            <div
                className=" p-[20px] w-[80vw] h-[77vh] absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center overflow-y-auto overflow-x-hidden gap-[50px]">
                <AnimatedTitle content={"Theme & Atmosphere"}/>
                {themeAtmosphere}
                <AnimatedTitle content={"Entertainment & Activities"}/>
                {entertainmentActivities}
                <AnimatedTitle content={"Dining & Drinks"}/>
                {diningDrinks}
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

const themeAtmosphere =
    <div className="w-full flex flex-col items-center gap-[30px]">
        <DetailsContent imgPath={"/resources/page 3 dress code.png"}
                        details={["Formal attire with masks (black-tie, ball gowns, cocktail dresses, tuxedos)."]}/>
        <DetailsContent imgPath={"/resources/page 3 color palette.png"}
                        details={["Midnight blue, royal blue, shimmering blue, or a classic black & blue Venetian-style look."]}/>
        <DetailsContent imgPath={"/resources/page 3 venue decor.png"}
                        details={["Twinkling fairy lights cascading from the ceiling.", "Fog machines for a dreamy, mysterious effect.", "Gothic candelabras and hanging lanterns for an old-world charm.", "Hanging vines and roses intertwined with golden masks for an enchanted forest vibe."]}/>
        <DetailsContent imgPath={"/resources/page 3 lighting.png"}
                        details={["Dim, moody lighting with fairy lights, lanterns, and LED projections of swirling patterns."]}/>
    </div>


const entertainmentActivities = <div className="w-full flex flex-col items-center gap-[30px]">
    <DetailsContent imgPath={"/resources/page 4 grand entrance.png"}
                    details={["A dramatic red carpet entrance with an archway of flowers, drapes, and golden lights."]}/>
    <DetailsContent imgPath={"/resources/page 4 live music.png"}
                    details={["A classical string quartet at the beginning, transitioning into a DJ or disco later."]}/>
    <DetailsContent imgPath={"/resources/page 4 masqueraqde mask contest.png"} details={["Best mask wins a prize"]}/>
    <DetailsContent imgPath={"/resources/page 4 photobooth.png"}
                    details={["A vintage-style photo booth with masquerade-themed props."]}/>
</div>

const diningDrinks = <div className="w-full flex flex-col items-center gap-[30px]">
    <DetailsContent imgPath={"/resources/page 5 appetizers and drinks.png"}
                    details={["Bite-sized delicacies and unlimited drinks."]}/>
    <DetailsContent imgPath={"/resources/page 5 elegant dinner.png"}
                    details={["An elaborate buffet with a 5-course menu and desserts."]}/>
</div>
