import React from "react";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../store/App";

import "./Banner.scss";

export default function BannerContainer() {
  const dispatch = useDispatch();

  return (
    <section className="bannerContainer">
      <div className="text">
        <p className="title">Besoin d'aide ?</p>
        <p>Julie vous guide dans votre choix de vin.</p>
        <button onClick={() => dispatch(setPopinDisplayed(true))}>
          Open Popin
        </button>
      </div>
      <img src="/assets/img/artisan.jpg" alt="" />
    </section>
  );
}
