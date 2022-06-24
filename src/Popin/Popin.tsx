import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HeaderContainer from "./Components/Header";
import Steps from "./Components/Steps";
import Video from "./Components/Video";
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  const { isIntroduction, currentStepType, isVideoDisplayed } = useSelector(
    (state: RootState) => state.app
  );
  const noVideoStepType = ["transition", "loader", "result"];

  if (isVisible)
    return (
      <section className="popinContainer">
        <HeaderContainer
          isLight={isIntroduction}
          isVideoDisplayed={!noVideoStepType.includes(currentStepType)}
          isIntroduction={currentStepType === "introduction"}
          isResult={currentStepType === "result"}
        />
        <div className="steps">
          <Steps />
        </div>
        {!noVideoStepType.includes(currentStepType) && !isVideoDisplayed && (
          <Video className="video" videoId="" />
        )}
      </section>
    );
  return null;
}
