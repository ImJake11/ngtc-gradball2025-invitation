"use client";

import {useEffect, useRef} from "react";
import {Howl} from "howler";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        soundRef.current = new Howl({
            src: ["/music/page 1 music.mp3", "/music/page 2 music.mp3", "/music/page 3 music.mp3", "/music/page 4 music.mp3",],
        });


        soundRef.current.load().on("load", () => console.log('loaded'));
    }, []);

    return <div className="w-screen min-h-screen relative flex bg-[#001143] flex-col">

        <div className="h-screen w-screen overflow-y-auto overflow-x-hidden relative">

            <img src="/resources/border.png" alt="mask"
                 className="w-[100vw] scale-[1.5] absolute rotate-[180deg] top-[5vw]"/>
            <img src="/resources/border.png" alt="mask"
                 className="w-[100vw] scale-[1.5] absolute -bottom-[30vw]"/>
            <img src="/resources/Invitation Page bg.png" alt="mask" className="w-[100vw] absolute"/>


            {/**  MAIN BODY */}
            <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center translate-y-[10vw]">

                <img src="/resources/Invitation Page logo.png" alt="mask" className="w-[100vw] "/>
                <div onClick={() => router.push("/pages/home")}>
                    <img src="/resources/Invitation Page open.png" alt="mask" className="w-[100vw] "/>
                </div>
            </div>
        </div>

    </div>
}
