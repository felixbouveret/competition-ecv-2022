import React from "react";
import PopinContainer from "./Popin";
import BannerContainer from "./Banner";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const isPopinDisplayed = useSelector(
    (state: RootState) => state.app.isPopinDisplayed
  );
  return (
    <>
      <BannerContainer />
      <PopinContainer isVisible={isPopinDisplayed} />
    </>
  );
}

export default App;
