"use client";

import ReactPlayer from "react-player";
import {useRef, useState} from "react";
import {OnProgressProps} from "react-player/base";
import localFont from "next/font/local";


const font = localFont({src: "../../public/gianteh.otf"});


export default function HighlightsComp() {
    const playerRef = useRef<ReactPlayer | null>(null);

    const [playedSeconds, setPlayedSeconds] = useState(0);

    const handleProgress = (state: OnProgressProps) => {
        setPlayedSeconds(state.playedSeconds);

        if (playedSeconds >= 15) {
            playerRef.current!.seekTo(0);
        }
    }

    return <div className="flex flex-col w-full items-center gap-4 ">
        <span className={`${font.className} font-semibold`}>Plaridel Graduation Ball 2024</span>

        <div className="relative">
            <ReactPlayer
                ref={playerRef}
                height={"100%"}
                width={"100%"}
                style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                }}
                loop
                controls={false}
                playing={true}
                muted
                url={
                    "https://firebasestorage.googleapis.com/v0/b/isafe-bca33.appspot.com/o/video-samples%2FGala%20Night%20Teaser%20Video%202025.mp4?alt=media&token=ef693def-0a96-4180-a1da-63c71395ebc4"
                }
                onProgress={handleProgress}

            >
                <source type="video/mp4"/>
            </ReactPlayer>
            <div className="inset-0 absolute">
                <img src="/resources/video%20border.png" alt="video border" style={{
                    scale: "1.02",
                    transform: "translate(0px,1px)",
                }}/>
            </div>
        </div>


        <img src="/resources/watch%20full%20video%20here.png" alt="videoborder" width={"80%"}/>

    </div>
}
