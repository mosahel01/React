import React from "react";

// Defines Color for Props
// type Color = "red" | "blue" | "green";

type ButtonProps = {
  backgroundColor: string;
  textColor?: string;
  fontSize: number;
  pillShaped?: boolean; // ? makes it optional within App.tsx
  //   padding: number[]; // array of numbers
  padding: [number, number, number, number]; // tuple of numbers, it has input limit
  borderRadius: number;
  clicking: (test: string) => number;
};

function Button({
  backgroundColor,
  fontSize,
  //   pillShaped,
  textColor,
  borderRadius,
  padding,
  clicking,
}: ButtonProps) {
  //   backgroundColor.toUpperCase();
  //   fontSize.toUpperCase(); // Error, fontSize : number

  return (
    <>
      <div className="flex flex-wrap justify-center items-center align-center my-20 ">
        {/* <button className="bg-blue-500 text-white rounded text-center px-4 py-2 "> */}
        <button
          onClick={clicking}
          style={{
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            color: textColor,
            padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
            borderRadius: borderRadius,
          }}
        >
          Button
        </button>
      </div>
    </>
  );
}

export default Button;
