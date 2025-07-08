import { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <div>
        <h1>
          Mini Context API Example Mini Context API Example
          <span className="text-blue-500"> (Tailwind CSS)</span>
          <span className="text-red-500"> (React)</span>
          <span className="text-green-500"> (Vite)</span>
          <span className="text-yellow-500"> (Mini Context)</span>
          <span className="text-purple-500"> (useState)</span>
          <span className="text-pink-500"> (useReducer)</span>
          <span className="text-orange-500"> (useContext)</span>
          <span className="text-gray-500"> (useMemo)</span>
          <span className="text-indigo-500"> (useCallback)</span>
          <span className="text-teal-500"> (useRef)</span>
        </h1>
      </div>
    </>
  );
}

export default App;
