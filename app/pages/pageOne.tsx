import ListComponent from "../components/ListStileCom";
import ListModel from "../models/list";

export default function PageOne() {
  const data: ListModel[] = [
    {
      title: "title one: ",
      content:
        "If the content goes down the title and you're trying to have the title and content appear on the same line, but the content is wrapping to the next line, it's likely due to insufficient width or incorrect layout settings.",
      data: [],
    },
    {
      title: "title one: ",
      content: "dasdas;ldn;laskn",
      data: [],
    },
    {
      title: "title one: ",
      content: "dasdas;ldn;laskn",
      data: ["asdsadsa", "dsasdsasda", "sdsadsasa"],
    },
  ];
  return (
    <div
      className="min-w-screen min-h-screen p-[10px] flex flex-col items-center"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <p
        style={{
          fontWeight: "var(--title-weight)",
          fontSize: "var(--title-font)",
        }}
      >
        Title Page
      </p>

      <ListComponent data={data} />
    </div>
  );
}
