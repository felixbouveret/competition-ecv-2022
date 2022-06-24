import React from "react";
import "./Recommandations.scss";
import ResultCard from "@/Popin/Components/ResultCard";

export default function Recommandations({ className }: { className?: string }) {
  return (
    <section className={"recommandationsRoot " + className}>
      <p className="sign">
        Pour enregistrer vos recommandations, pensez à vous
        <span> connecter</span> ou vous <span>inscrire</span>.
      </p>
      <div className="content">
        <h1 className="title">Je vous recommande...</h1>
        <div className="cardsContainer">
          <ResultCard
            tags={["Fort", "Boisé", "Épicé"]}
            title="Cuvée tradition 2018"
            compatibility="80"
            price="19.99"
            image="/assets/img/wine-glass.png"
            shop="le puits d'amour"
          />
          <ResultCard
            tags={["Fort", "Boisé", "Fruité"]}
            title="Cuvée spéciale 2016"
            compatibility="88"
            price="12.99"
            image="/assets/img/wine-glass-2.jpg"
            shop="le puits d'amour"
          />
          <ResultCard
            tags={["Tanique", "Fumé", "Épicé"]}
            title="Cuvée primeur 2017"
            compatibility="75"
            price="9.99"
            image="/assets/img/wine-glass.png"
            shop="le Chateau Dillon"
          />
        </div>
      </div>
    </section>
  );
}
