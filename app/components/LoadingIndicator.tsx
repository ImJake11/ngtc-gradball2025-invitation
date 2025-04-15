import {Stack} from "@mui/system";
import {ThreeDot} from "react-loading-indicators";

export default function LoadingIndicator() {


    return <div className="w-screen h-screen absolute top-0 left-0 grid place-content-center">
        <div className="w-screen h-screen flex flex-col justify-center items-center"

             style={{

                 backgroundColor: "rgba(255,255,255,.1)",
                 backdropFilter: "blur(4px)",
             }}
        >

            <img src="/resources/NGTC Logo_GOLD.png" alt="logo" width={70}/>
            <div className="w-[100px] flex justify-center">
                <Stack>
                    <ThreeDot color="var(--primary)" easing="ease-in-out" size="small"/>
                </Stack>
            </div>
        </div>
    </div>
}