import React from "react";
import "./Graphs.scss";
import ProfileChart from "@/Popin/Components/ProfileChart";

export default function Graphs({ className }: { className?: string }) {
  return (
    <section className={"graphsRoot " + className}>
      <h3 className="tag">Votre profil</h3>
      <h2 className="title">
        Vous êtes un <span>initié</span>
      </h2>
      <p className="description">
        Vous appréciez les saveurs grandes, audacieuses et complexes.
      </p>
      <div className="graphsContainer">
        <div className="nav">
          <span id="pref">Preferences</span>
          <span>|</span>
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
        </div>
      </div>
    </section>
  );
}
