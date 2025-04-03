export default function HighlightsComp({ isLeft }: { isLeft: boolean }) {
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
    <div className="w-screen flex flex-row gap-[15px]">
      {isLeft && <Content />}
      <div
        className={`w-[60%] h-[200px] bg-gray-400 rounded-[10px] ${
          isLeft ? "mr-[20px]" : undefined
        }`}
      ></div>
      {!isLeft && <Content />}
    </div>
  );
}
