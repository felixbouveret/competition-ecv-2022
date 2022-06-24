import React, { useEffect } from "react";
import Result from "../Result";
import Introduction from "./components/Introduction";
import Loader from "./components/Loader";
import Question from "./components/Question";
import Transition from "./components/Transition";
import useSteps from "./hooks/useSteps";
import "./Steps.scss";

export default function UserProfileFlow() {
  const { goNext, goBack, currentStep, canGoBack } = useSteps();

  useEffect(() => {
    goNext();
  }, []);

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
    if (currentStep.type === "introduction")
      return (
        <Introduction
          introduction={currentStep}
          goBack={goBack}
          goNext={goNext}
          canGoBack={canGoBack()}
        />
      );
    if (currentStep.type === "loader")
      return <Loader loader={currentStep} goNext={goNext} />;
    if (currentStep.type === "result") return <Result result={currentStep} />;
    return null;
  };
  return (
    <div className={"rootSteps " + currentStep.type}>{stepComponent()}</div>
  );
}
