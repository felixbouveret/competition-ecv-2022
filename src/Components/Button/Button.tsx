import React from "react";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../../store/App";

import "./Button.scss";

export default function ButtonContainer() {
  const dispatch = useDispatch();
  const btn = {
  color: 'light',
  text: 'Demander conseil',
};

  return (
    <section className="buttonContainer">
        <button className={btn.color} onClick={() => dispatch(setPopinDisplayed(true))}>
          {btn.text}
        </button>
    </section>
  );
}
