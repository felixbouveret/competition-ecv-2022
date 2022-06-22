import React from "react";
import useSteps from "./hooks/useSteps";

export default function UserProfileFlow() {
  const { goNext, goBack, currentStep } = useSteps();
  if (!currentStep) return <div></div>;
  return (
    <div>
      <button onClick={() => goBack()}>back</button>
      <button onClick={() => goNext()}>next</button>
      {currentStep.title}
    </div>
  );
}
