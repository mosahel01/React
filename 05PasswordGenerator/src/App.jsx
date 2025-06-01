import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // const handlePassword = () => {
  //   setPassword(Math.random() * length);
  // };

  const handlePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    handlePassword();
  }, [length, character, number, handlePassword]);

  // const handleCopy = () => {
  //   setPassword(navigator.clipboard.writeText(handlePassword()));
  // };

  const passwordRef = useRef(null);

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.selectSelectionRange(2, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="p-x-10 p-6 bg-[#212122] shadow-black-lg rounded-xl text-center justify-center ">
        <h2 className="text-center text-white text-2xl">Password Generator</h2>
        <div className="flex flex-wrap justify-center rounded-xl m-5 ">
          <input
            type="text"
            placeholder="type a password"
            id="div-input"
            value={password}
            className="text-black bg-white rounded-l-xl p-2 "
            ref={passwordRef}
          />
          <button
            type="button"
            className="text-white bg-yellow p-6"
            onClick={copytoclipboard}
            // onClick={() => handleCopy}
            // onClick={() => handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap space-between align-center p-6 rounded-xl">
          <div>
            <input
              type="range"
              id="slider"
              value={length}
              min={6}
              max={40}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label
              // htmlFor="slider"
              className="px-5 text-white "
              // value={length}
              // onChange={(e) => {
              //   setLength(e.target.value);
              // }}
            >
              Length : {length}
            </label>
          </div>

          <input
            type="checkbox"
            id="num-checkbox"
            value={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="num-checkbox" className="pl-1">
            Numbers
          </label>
          <input
            type="checkbox"
            id="sym-checkbox"
            value={Symbol}
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label htmlFor="sym-checkbox" className="pl-1">
            Symbols
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
