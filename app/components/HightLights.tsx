"use client";

import ReactPlayer from "react-player";
import {useRef, useState} from "react";
import {OnProgressProps} from "react-player/base";

export default function HighlightsComp() {
    const playerRef = useRef<ReactPlayer | null>(null);

    const [playedSeconds, setPlayedSeconds] = useState(0);

    const handleProgress = (state: OnProgressProps) => {
        setPlayedSeconds(state.playedSeconds);

        if (playedSeconds >= 5) {
            playerRef.current!.seekTo(0);
        }
    }

    return <div className="flex flex-col w-full items-center gap-2.5">
        <span>Plaridel Graduation Ball 2024</span>
        <div className="w-full h-[30vh] relative ">
            <div
                className="w-full h-full absolute overflow-hidden rounded-[20px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ReactPlayer
                    ref={playerRef}
                    height={"100%"}
                    width={"100%"}
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
            </div>
            <img src="/resources/video border.png" alt="video border"
                 className=" w-full h-[30vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>

        </div>
        <img src="/resources/watch full video here.png" alt="watch full video"
             className="w-[60vw] -translate-y-[20px]"/>


    </div>
}
