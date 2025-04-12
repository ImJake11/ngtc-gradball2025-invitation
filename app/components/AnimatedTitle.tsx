import localFont from "next/font/local";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";


const font = localFont({
    src: "../../public/gianteh.otf"
})


export default function AnimatedTitle({content}: { content: string }) {

    const ref = useRef(null);

    const inView = useInView(ref, {once: false, amount: "some"})


    return <motion.span
        ref={ref}
        className={`${font.className} text-[22px] text-white text-center whitespace-nowrap`}

        animate={{
            letterSpacing: inView ? "0px" : "3px",
            opacity: inView ? 1 : 0,
        }}

        transition={{
            ease: "linear",
            duration: .25,
            delay: .2
        }}

    >{content}</motion.span>
}