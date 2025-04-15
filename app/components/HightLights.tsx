"use client";

import ReactPlayer from "react-player";
import {useRef, useState} from "react";
import {OnProgressProps} from "react-player/base";
import localFont from "next/font/local";
import {ThreeDot} from "react-loading-indicators";
import {AnimatePresence, motion, MotionConfig} from "framer-motion";

const font = localFont({src: "../../public/gianteh.otf"});


export default function HighlightsComp({url, title, link}: { url: string, title: string, link: string }) {
    const [isLoading, setIsLoading] = useState(true);

    const playerRef = useRef<ReactPlayer | null>(null);

    const [playedSeconds, setPlayedSeconds] = useState(0);

    const handleProgress = (state: OnProgressProps) => {
        setPlayedSeconds(state.playedSeconds);

        if (playedSeconds >= 15) {
            playerRef.current!.seekTo(0);
        }
    }

    return <MotionConfig transition={{
        ease: "easeInOut",
        duration: .35,
    }}>

        <div className="flex flex-col w-full items-center gap-4 ">
            <span
                className={`${font.className} font-semibold text-center text-[3vw]`}>{title}</span>

            <div className="relative">
                <AnimatePresence>
                    {isLoading ? loadingIndicator : <div className="inset-0 absolute">
                        <motion.img src="/resources/video%20border.png" alt="video border" style={{
                            scale: "1.02",
                            transform: "translate(0px,1px)",
                        }}
                                    initial={{
                                        opacity: 0,
                                    }}

                                    animate={{
                                        opacity: 1,
                                    }}

                        />
                    </div>}
                </AnimatePresence>
                <ReactPlayer
                    ref={playerRef}
                    height={"100%"}
                    width={"100%"}
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                    }}
                    loop
                    playing={true}
                    controls={true}
                    muted
                    url={url}
                    onProgress={handleProgress}
                    onReady={() => setIsLoading(false)}

                >
                    <source type="video/mp4"/>

                </ReactPlayer>

            </div>


            <AnimatePresence>
                {!isLoading ?
                    <a href={link} className="flex justify-center">
                        <motion.img src="/resources/watch%20full%20video%20here.png" alt="videoborder" width={"80%"}

                                    initial={{
                                        opacity: 0,
                                    }}

                                    animate={{
                                        opacity: 1,
                                    }}
                        />
                    </a> :
                    <div className="w-[80%] h-[100px]"></div>}
            </AnimatePresence>

        </div>
    </MotionConfig>
}


const loadingIndicator = <AnimatePresence>
    <motion.div
        className="w-[80vw] h-[300px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4"

        initial={{
            opacity: 0,
        }}

        animate={{
            opacity: 1,
        }}

        exit={{
            opacity: 0,
        }}
    >

        <motion.img src="/resources/NGTC%20Logo_GOLD.png" width={60} alt="logo"/>
        <ThreeDot color="var(--primary)"/>

    </motion.div>
</AnimatePresence>