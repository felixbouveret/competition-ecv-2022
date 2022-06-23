import React from "react";
import "./Result.scss";
import ResultCard from "../ResultCard";
import ProfileChart from "../ProfileChart";

export default function Result() {
  const swipe = (e: any) => {
    console.log("className 👉️", e.target.id);

    // 👇️ check if element contains class
    if (e.target.id === "pref") {
      console.log("Element contains id pref");
    } else {
      console.log("Element does NOT contain id pref");
    }
  };
  return (
    <div className="result">
      <section className="reco">
        <p className="log">
          Pour enregistrer vos recommandations, pensez à vous
          <span> connecter</span> ou vous <span>inscrire</span>.
        </p>
        <div>
          <h1 className="title">Voici les vins que je vous recommande</h1>
          <div className="graphsContainer">
            <div className="cards">
              <ResultCard
                tags={["Fort", "Boisé", "Épicé"]}
                title="Cuvée tradition 2018"
                compatibility="80"
                price={19.99}
                image="/assets/img/wine-glass.png"
                shop="le puits d'amour"
              />
              <ResultCard
                tags={["Fort", "Boisé", "Fruité"]}
                title="Cuvée spéciale 2016"
                compatibility="88"
                price={12.99}
                image="/assets/img/wine-glass-2.jpg"
                shop="le puits d'amour"
              />
              <ResultCard
                tags={["Tanique", "Fumé", "Épicé"]}
                title="Cuvée primeur 2017"
                compatibility="75"
                price={9.99}
                image="/assets/img/wine-glass.png"
                shop="le Chateau Dillon"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="graph">
        <h3 className="profile">Votre profil</h3>
        <h2 className="title">
          Vous êtes un <span>initié</span>
        </h2>
        <p className="log">
          Vous appréciez les saveurs grandes, audacieuses et complexes.
        </p>
        <div className="graphsContainer">
          <div className="pref" onClick={(e) => swipe(e)}>
            <span id="pref">Preferences</span> |
            <span id="more">Mais aussi ...</span>
          </div>
          <div className="graphs">
            <ProfileChart
              title="Les détails de ce vin"
              description="La Cuvée Tradition 2018 est un vin rouge complexe, boisé et épicé."
              datas={[
                {
                  label: "Puissant",
                  value: 3.5,
                },
                {
                  label: "Épicé",
                  value: 9.5,
                },
                {
                  label: "Doux",
                  value: 7.5,
                },
                {
                  label: "Complexe",
                  value: 10,
                },
                {
                  label: "Boisé",
                  value: 10,
                },
                {
                  label: "Fruité",
                  value: 9,
                },
              ]}
              rgb="122,16,71"
            />
            <ProfileChart
              title="Mais vous aimez aussi"
              description="Si vous êtes à la recherche d’un change-ment pendant la saison estivale, un vin blanc sec devrait vous plaire."
              datas={[
                {
                  label: "Puissant",
                  value: 8,
                },
                {
                  label: "Épicé",
                  value: 3,
                },
                {
                  label: "Doux",
                  value: 4,
                },
                {
                  label: "Complexe",
                  value: 0,
                },
                {
                  label: "Boisé",
                  value: 3,
                },
                {
                  label: "Fruité",
                  value: 7,
                },
              ]}
              rgb="255, 192, 58"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
