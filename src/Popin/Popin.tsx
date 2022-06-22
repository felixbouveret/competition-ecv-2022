import React from "react";
import HeaderContainer from "./Components/Header";
import Steps from "./Components/Steps";
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  if (isVisible)
    return (
      <section className="popinContainer">
        <HeaderContainer isLight={false} />
        <Steps />
      </section>
    );
  return null;
}
