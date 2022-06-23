import React from "react";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Question from "./components/Question";
import Transition from "./components/Transition";
import useSteps from "./hooks/useSteps";
import "./Steps.scss";

export default function UserProfileFlow() {
  const { goNext, goBack, currentStep, canGoBack } = useSteps();
  if (!currentStep) return <div></div>;

  const stepComponent = () => {
    if (currentStep.type === "question")
      return (
        <Question
          question={currentStep}
          goBack={goBack}
          goNext={goNext}
          canGoBack={canGoBack()}
        />
      );
    if (currentStep.type === "transition")
      return (
        <Transition
          transition={currentStep}
          goBack={goBack}
          goNext={goNext}
          canGoBack={canGoBack()}
        />
      );
    if (currentStep.type === "loader")
      return <Loader loader={currentStep} goNext={goNext} />;
    return null;
  };
  return <div className="rootSteps">{stepComponent()}</div>;
}
