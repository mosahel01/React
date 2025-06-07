import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label className="text-black/40 inline-block mb-2" htmlFor={amountId}>
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none bg-transparent w-full py-1.5"
          type="number"
          placeholder="amount.."
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            e.onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            e.onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          {/* <option value="usd">usd</option>
          <option value="usd">inr</option>
          <option value="usd">cad</option> */}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
