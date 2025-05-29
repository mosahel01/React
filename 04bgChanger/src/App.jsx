import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // function handleColor() {
  //   console.log("hello world");
  // }

  return (
    <div
      className="w-full h-screen duration-200"
      id="Nothing-Sir"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center px-2 py-3 shadow-stone-700 shadow-lg gap-3 bg-white rounded-xl ">
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-white"
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-white"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-white"
            style={{ background: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-black"
            style={{ background: "cyan" }}
            onClick={() => setColor("cyan")}
          >
            Cyan
          </button>
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-black"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-white"
            style={{ background: "indigo" }}
            onClick={() => setColor("indigo")}
          >
            Indigo
          </button>
          <button
            type="button"
            className="outline-none px-4 py-3 shadow-lg rounded-xl text-white"
            style={{ background: "brown" }}
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
