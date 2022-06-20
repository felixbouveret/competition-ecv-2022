import React from "react";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../store/App";

import "./Banner.scss";

export default function BannerContainer() {
  const dispatch = useDispatch();

  return (
    <section className="bannerContainer">
      <button onClick={() => dispatch(setPopinDisplayed(true))}>
        Open Popin
      </button>
    </section>
  );
}
