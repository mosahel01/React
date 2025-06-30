// import React from "react";

type CardProps = {
  backgroundColor: string;
  textColor: string;
  padding: number[];
  margin: number[];
  border: string;
  fontSize: number;
  borderRadius: number;
};

function Card({
  backgroundColor,
  textColor,
  padding,
  margin,
  border,
  fontSize,
  borderRadius,
}: CardProps) {
  return (
    <>
      <div
        className="flex flex-wrap justify-center"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          padding: `${padding[0]}px ${padding[1]}px`,
          margin: `${margin[0]}px ${margin[1]}px`,
          border: border,
          fontSize: fontSize,
          borderRadius: borderRadius,
        }}
      >
        <div>This is a Card Component</div>
      </div>
    </>
  );
}

export default Card;
