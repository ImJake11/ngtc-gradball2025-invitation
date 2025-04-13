import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";

const gothic = localFont({
    src: "../../public/centurygothic.ttf",
});

const gianteh = localFont({
    src: "../../public/gianteh.otf",
})

export default function PageOne() {
    const viewRef = useRef(null);

    const inView = useInView(viewRef, {
        once: false,
        amount: "all"
    });

    const borderAnimationDur = .35;

    return (
        <motion.div
            className="scroll-page"
        >
            <img
                src={"/resources/page one bg.webp"}
                alt={"Page one background"}

            />

            <motion.div

                className="w-[55vw] h-auto absolute top-[3%] left-1/2 traslate-y-[-50%] translate-x-[-50%]"
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

            <motion.img
                ref={viewRef}
                src="/resources/border.png"
                alt="border"
                className="w-[80vw] absolute top-[1.5%] left-[-34vw] rotate-[-30deg] opacity-80"
                animate={{
                    translateX: inView ? "0px" : "-400px",
                    translateY: inView ? "0px" : "-300px",
                }}
                transition={{
                    ease: "linear",
                    duration: borderAnimationDur,

                }}
            />

            <motion.img
                src="/resources/border.png"
                alt="border"
                className="w-[80vw] absolute top-[1.5%] right-[-34vw] rotate-[30deg] opacity-80"
                animate={{
                    translateX: inView ? "0px" : "400px",
                    translateY: inView ? "0px" : "-300px",
                }}
                transition={{
                    ease: "linear",
                    duration: borderAnimationDur,

                }}
            />


            {/** SIDE BORDERS */}
            <motion.img
                src="/resources/border.png"
                alt="border"
                className="w-[80vw] absolute top-[122vw] right-[-34vw] rotate-[-90deg] translate-x-[25px]"
                animate={{
                    translateY: inView ? "0px" : "100px",
                    opacity: inView ? 1 : 0,
                }}
                transition={{
                    ease: "linear",
                    duration: borderAnimationDur,
                }}
            />


            <motion.img
                src="/resources/border.png"
                alt="border"
                className="w-[80vw] absolute top-[122vw] left-[-34vw] rotate-[90deg] translate-x-[-28px]"
                animate={{
                    translateY: inView ? "0px" : "100px",
                    opacity: inView ? 1 : 0,
                }}
                transition={{
                    ease: "linear",
                    duration: borderAnimationDur,
                }}
            />


            {/** TEXT DATA */}


            {Title(inView)}
            <div
                className={`w-screen absolute top-[59vw] text-white text-[2.5vw] ${gianteh.className}`}
                style={{
                    textShadow: "2px 2px 3px black, -2px -2px 3px black",
                }}
            >
                <p>SHS Graduation Ball 2025</p>
            </div>


            {Logo(inView)}
            {MessageBody(inView)}


            {/** DIV PURPOSE IS TO SHOW HIT BOX FOR REFERENCE TO LOAD ALL COMPONENT EG. BORDER MASK ETC */}
            <div ref={viewRef}
                 className="absolute w-[80vw] h-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
    );
}

const Title = (inView: boolean) =>
    <motion.div
        className={`w-screen absolute top-[45vw] left-0 text-[3.5vw] ${gianteh.className}`}
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
        className="w-[11vw] absolute top-[72vw] left-1/2 -translate-x-1/2 -translate-y-1/2"
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
        className={`${gothic.className}  flex flex-col justify-center gap-[5vw] absolute top-[135vw]  left-1/2 w-[77vw] h-[55vh] -translate-x-1/2 -translate-y-1/2 text-[2.5vw] p-[8vw] font-extrabold`}
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
        <p className="text-[2.8vw]">
            Welcome to Enchanted Masquerade: A Night of Mystery & Elegance
        </p>
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
