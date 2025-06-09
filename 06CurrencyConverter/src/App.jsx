import { useState } from "react";
import "./App.css";
import { InputBox } from "./Components/Import.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedamount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedamount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://pikbest.com/backgrounds/stock-market-trend-isolated-red-and-green-minimal-trading-graph-in-3d-rendering-illustrating-the-trending-analysis-of-data_9728760.html')`,
        }}
      >
        <div className="w-full h-screen bg-no-repeat flex flex-wrap justify-center items-center bg-cover">
          <div>
            <form onSubmit={(e) => e.preventDefault}></form>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                amountDisabled
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0">
              <button
                type="button"
                className="
              absolute 
              left-1/2 
              -translate-x-1/2
              -translate-y-1/2
              border-2
              border-white
              bg-blue-600
              text
              px-2
              py-0.5
               "
                onClick={swap}
              >
                Swap {swap}
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedamount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                amountDisabled
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
