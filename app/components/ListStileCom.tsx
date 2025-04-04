import ListModel from "../models/list";

export default function ListComponent({ data }: { data: ListModel[] }) {
  return (
    <div className={`w-screen gap-[5px]`}>
      {data.map((d, index) => (
        <div
          key={index}
          style={{
            width: "100dvw",
            padding: "10px",
          }}
        >
          <p>
            <span className="font-bold">{d.title}</span>
            <span className="wrap-break-word">{d.content}</span>
          </p>
          {d.data.map((sd, index) => (
            <li
              key={index}
              style={{
                paddingLeft: "30px",
                listStyle: "disc",
              }}
            >
              {sd}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}
