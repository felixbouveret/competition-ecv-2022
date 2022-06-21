import React from "react";
import "./Button.scss";
interface PropsInterface {
  isLight?: boolean;
  text: string;
  onClick?: any;
}

export default function ButtonContainer({
  isLight = false,
  text,
  onClick,
}: PropsInterface) {
  return (
    <button className={isLight ? "light " : ""} onClick={onClick}>
      {text}
    </button>
  );
}
