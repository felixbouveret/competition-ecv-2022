import React from "react";
import classNames from "classnames";
import "./Button.scss";
interface PropsInterface {
  isLight?: boolean;
  isSmall?: boolean;
  isWhite?: boolean;
  text: string;
  onClick?: any;
}

export default function Button({
  isLight,
  isSmall,
  isWhite,
  text,
  onClick,
}: PropsInterface) {
  const classes = classNames({
    button: true,
    light: isLight,
    small: isSmall,
    white: isWhite,
  });

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}
