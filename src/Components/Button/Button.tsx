import React from "react";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../../store/App";

import "./Button.scss";
interface PropsInterface{ isLight? : boolean, text:string };

export default function ButtonContainer({ isLight = false, text }: PropsInterface) {
  const dispatch = useDispatch();
  
  return (
    <section className="buttonContainer">
        <button className={ isLight ? "" : "dark" } onClick={() => dispatch(setPopinDisplayed(true))}>
          {text}
        </button>
    </section>
  );
}
