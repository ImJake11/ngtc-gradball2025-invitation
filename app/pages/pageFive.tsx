import HighlightsComp from "../components/HightLights";

export default function PageFive() {
  return (
    <div
      className="w-screen h-screen  flex flex-col justify-evenly p-[10px] box-border"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <HighlightsComp key={index} isLeft={index % 2 !== 0} />
      ))}
    </div>
  );
}
