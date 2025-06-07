import { useState } from "react";
import "./App.css";
import { InputBox } from "./Components/Import";
// import { useCurrencyInfo } from "./hooks/useCurrencyInfo.js";

function App() {
  // const currencyInfo = useCurrencyInfo(from);

  // const options = Object.keys(currencyInfo);

  // const [from, setFrom] = useState("usd");
  // const [amount, setAmount] = useState(0);
  // const [to, setTo] = useState("inr");
  // const [convertedamount, setConvertedAmount] = useState();

  // const swap = () => {
  //   setFrom(to);
  //   setTo(from);
  //   setConvertedAmount(amount);
  //   setAmount(convertedamount);
  // };

  // const convert = () => {
  //   setConvertedAmount(amount * currencyInfo[to]);
  // };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('')`,
        }}
      >
        <div>
          <div>
            <form onSubmit={(e) => e.preventDefault}></form>
            <div>
              <InputBox label="From" />
            </div>
            <div>
              <button type="button">Swap</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
