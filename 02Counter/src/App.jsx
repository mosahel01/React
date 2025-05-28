import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 5; defining a variable cannot Update UI
  console.log("working");

  // setCounter is responsible for updating the value of 'counter'
  const addValue = () => {
    console.log(counter);
    setCounter((counter) => counter + 1);
  };
  function delValue() {
    console.log(counter);
    setCounter((counter) => counter - 1);
  }
  const resetValue = () => {
    console.log(counter);
    setCounter((counter) => counter);
  };

  return (
    <>
      <h1>Mos and React</h1>
      <h2>Counter Value: {counter}</h2>
      <button type="button" onClick={addValue}>
        Add Value
      </button>
      <br />
      <button type="button" onClick={resetValue}>
        Reset
      </button>
      <br />
      <button type="button" onClick={delValue}>
        Del Value
      </button>
    </>
  );
}

export default App;
