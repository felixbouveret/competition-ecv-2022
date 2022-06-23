import React from "react";
import Navigation from "./components/Navigation";
import Question from "./components/Question";
import useSteps from "./hooks/useSteps";
import "./Steps.scss";

export default function UserProfileFlow() {
  const { goNext, goBack, currentStep, canGoBack } = useSteps();
  if (!currentStep) return <div></div>;

  const stepComponent = () => {
    if (currentStep.type === "question") return <Question {...currentStep} />;
    return null;
  };
  return (
    <div className="rootSteps">
      {stepComponent()}
      <Navigation
        className="navigation"
        goBack={goBack}
        goNext={goNext}
        canGoBack={canGoBack()}
      />
    </div>
  );
}
