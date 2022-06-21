import React from "react";
import ButtonContainer from "../Components/Button/Button";
import "./Banner.scss";

import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../store/App";

export default function BannerContainer() {
  const dispatch = useDispatch();
  return (
    <section className="bannerContainer">
      <div className="text">
        <p className="title">Besoin d'aide ?</p>
        <p>Julie vous guide dans votre choix de vin.</p>
        <ButtonContainer
          text="demander conseil"
          isLight
          onClick={() => dispatch(setPopinDisplayed(true))}
        ></ButtonContainer>
      </div>
      <img src="/assets/img/artisan.jpg" alt="" />
    </section>
  );
}
