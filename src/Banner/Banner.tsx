import React from "react";
import ButtonContainer from "../Components/Button/Button";
import "./Banner.scss";

export default function BannerContainer() {

  return (
    <section className="bannerContainer">
      <div className="text">
        <p className="title">Besoin d'aide ?</p>
        <p>Julie vous guide dans votre choix de vin.</p>
        <ButtonContainer text="demander conseil" isLight></ButtonContainer>
      </div>
      <img src="/assets/img/artisan.jpg" alt="" />
    </section>
  );
}
