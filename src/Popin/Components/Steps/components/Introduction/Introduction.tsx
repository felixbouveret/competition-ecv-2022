import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Icon from "../../../../../Components/Icon";
import {
  setIntroduction,
  setProgressBarDisplayed,
} from "../../../../../store/App";
import { IntroductionStepInterface } from "../../../../../types/step.interface";
import { transitionSteps } from "../../../../../types/stepsAnswers.enum";
import Video from "../../../Video";
import useAnswers from "../../hooks/useAnswers";
import Navigation from "../Navigation";
import "./Introduction.scss";

interface IntroductionProps {
  goBack: () => void;
  goNext: () => void;
  canGoBack: boolean;
  introduction: IntroductionStepInterface;
}
export default function Introduction({
  goBack,
  goNext,
  canGoBack,
  introduction,
}: IntroductionProps) {
  const dispatch = useDispatch();
  const { handleAnswer, answers } = useAnswers();

  useEffect(() => {
    // @ts-ignore:next-line
    const introductionFlag = introduction.id as transitionSteps;
    handleAnswer(introductionFlag, false, []);
  }, []);

  const onGoNext = () => {
    dispatch(setIntroduction(false));
    dispatch(setProgressBarDisplayed(true));
    goNext();
  };

  return (
    <div className="introductionRoot">
      <Video className="video" videoId="" />
      <div className="content">
        <h2 className="title">{introduction.title}</h2>
        <p className="description">{introduction.description}</p>
        <div className="subtitle">
          <Icon name="time-icon" />
          <p>{introduction.subtitle}</p>
        </div>
      </div>
      <Navigation
        isIntroduction
        className="navigation"
        goBack={goBack}
        goNext={onGoNext}
        canGoBack={canGoBack}
        canGoNext={introduction.canGoNext(answers)}
      />
    </div>
  );
}
