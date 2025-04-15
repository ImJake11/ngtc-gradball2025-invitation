"use client";

import {motion, useInView} from "framer-motion";
import {useRef} from "react";

export default function DetailsContent({imgPath, details,}: { imgPath: string, details: string[] }) {

    const ref = useRef(null);

    const isInview = useInView(ref, {once: false, amount: "some",});

    return <motion.div
        ref={ref}
        className={`relative`}

        animate={{
            scale: isInview ? 1 : 0.7,
            opacity: isInview ? 1 : 0.5,
            translateY: "0px",

        }}

        transition={{
            duration: .3,
            ease: "easeInOut",
        }}
    >
        <motion.img src={imgPath} alt="img" className="relative w-[85vw]"/>
        <div
            className=" mt-[20px] absolute inset-0 pl-9 pr-9  text-[2.8vw] font-bold text-[var(--secondary)] flex flex-col justify-evenly text-center">
            {details.map((t, i) => <span key={i}>{t}</span>)}
        </div>

    </motion.div>
}