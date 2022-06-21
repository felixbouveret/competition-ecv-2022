import React from "react";
import "./Result.scss";
import Icon from "../../../Components/Icon";

export default function ResultCard() {
  return (
    <div className="resultCard">
      <img src="/assets/img/wine-glass.png" alt="" />
      <div className="personalisation">
        <p>80% de compatibilité</p>
        <div className="circle">
          <Icon name="arrow-left" />
        </div>
      </div>
      <section className="content">
        <div className="description">
          <p>Fort</p>
          <p>Boisé</p>
          <p>Épicé</p>
        </div>
        <h4>Cuvée tradition 2018</h4>
        <p className="winery">Le puits d'amour</p>
        <div className="selling">
          <p>11,99 €</p>
          <div className="circle">
            <Icon name="arrow-left" />
          </div>
        </div>
      </section>
    </div>
  );
}
