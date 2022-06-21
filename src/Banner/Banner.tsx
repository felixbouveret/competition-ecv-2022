import React from "react";
import Button from "../Components/Button/Button";
import "./Banner.scss";
import ResultCard from "../Popin/Components/Result/Result";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../store/App";

export default function BannerContainer() {
  const dispatch = useDispatch();
  return (
    <>
      <section className="bannerContainer">
        <div className="text">
          <p className="title">Besoin d'aide ?</p>
          <p>Julie vous guide dans votre choix de vin.</p>
          <Button
            text="demander conseil"
            isLight
            onClick={() => dispatch(setPopinDisplayed(true))}
          />
        </div>
        <img src="/assets/img/artisan.jpg" alt="" />
      </section>
      <ResultCard />
    </>
  );
}
