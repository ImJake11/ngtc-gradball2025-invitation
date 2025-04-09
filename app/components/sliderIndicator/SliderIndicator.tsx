import {motion} from "framer-motion";

export default function SliderIndicator({
                                            length,
                                            current,
                                        }: {
    length: number;
    current: number;
}) {
    return (
        <div
            className={`absolute flex z-[1] bottom-0 left-0 h-[5px] w-screen`}>
            {Array.from({length: length}).map((_, index) => {
                const isCurrent = index === current;

                return (
                    <motion.div

                        transition={{
                            duration: .25,
                            ease: "easeInOut",
                        }}

                        animate={{
                            backgroundColor: isCurrent ? "var(--primary)" : "rgba(252, 186, 3, .0)"
                        }}

                        key={index}
                        className={`h-[5px] flex-[1] 
                        ${index === 0 && "rounded-tl-10px"}  
                        ${index === 0 && "rounded-bl-10px"}
                        ${index === length - 1 && "rounded-br-10px"}
                         ${index === length - 1 && "rounded-tr-10px"}
                        `}
                        style={{
                            border: "solid 1px var(--primary)",
                        }}
                    ></motion.div>
                );
            })}
        </div>
    );
}
