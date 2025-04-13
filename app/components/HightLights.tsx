import ReactPlayer from "react-player";

export default function HighlightsComp({isLeft}: { isLeft: boolean }) {
    function Content() {
        return (
            <div
                className={`flex flex-col w-[40%] gap-[10px] ${
                    isLeft ? undefined : "mr-[20px]"
                } `}
            >
                <p className="font-bold">Spotlight 1</p>
                <p className="text-[.8rem]">
                    If the co and content appear on the same line, but the content is
                    wrapping to the next line, it's likely due to insufficient width or
                    incorrect layout settings.
                </p>
            </div>
        );
    }

    return (
        <div className="w-screen flex flex-row gap-[15px] overflow-hidden">
            {isLeft && <Content/>}
            <div
                className={`w-[60%] h-[200px] bg-transparent rounded-[10px] ${
                    isLeft ? "mr-[20px]" : undefined
                }`}
            >
                <ReactPlayer
                    height={"100%"}
                    width={"100%"}
                    loop
                    controls={false}
                    playing={true}
                    muted
                    url={
                        "https://firebasestorage.googleapis.com/v0/b/isafe-bca33.appspot.com/o/video-samples%2FGala%20Night%20Teaser%20Video%202025.mp4?alt=media&token=ef693def-0a96-4180-a1da-63c71395ebc4"
                    }
                >
                    <source type="video/mp4"/>
                </ReactPlayer>
            </div>
            {!isLeft && <Content/>}
        </div>
    );
}
