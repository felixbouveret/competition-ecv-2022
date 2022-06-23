import React from "react";
import Navigation from "./components/Navigation";
import useSteps from "./hooks/useSteps";

export default function UserProfileFlow() {
  const { goNext, goBack, currentStep, canGoBack } = useSteps();
  if (!currentStep) return <div></div>;
  return (
    <div>
      {currentStep.title}
      <Navigation goBack={goBack} goNext={goNext} canGoBack={canGoBack()} />
    </div>
  );
}
