// import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-4xl bg-purple-800 text-amber-400 p-4 mb-8 border-4 border-amber-400 rounded-b-3xl ">
        HI MOM!
      </div>
      <Card title="The Coldest Sunset" />
      <Card title="The Warmest Sunset" />
      <Card title="The Chillest Sunset" />
      <Card />
    </>
  );
}

export default App;
