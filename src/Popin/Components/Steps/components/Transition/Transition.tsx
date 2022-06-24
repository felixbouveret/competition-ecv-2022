import React, { useEffect } from "react";
import { TransitionStepInterface } from "@/types/step.interface";
import { transitionSteps } from "@/types/stepsAnswers.enum";
import useAnswers from "../../hooks/useAnswers";
import Navigation from "../Navigation";
import StepHead from "../StepHead";
import "./Transition.scss";

interface TransitionProps {
  goBack: () => void;
  goNext: () => void;
  canGoBack: boolean;
  transition: TransitionStepInterface;
}
export default function Transition({
  goBack,
  goNext,
  canGoBack,
  transition,
}: TransitionProps) {
  const { handleAnswer, answers } = useAnswers();

  useEffect(() => {
    // @ts-ignore:next-line
    const transitionFlag = transition.id as transitionSteps;
    handleAnswer(transitionFlag, false, []);
  }, []);

  return (
    <div className="transitionRoot">
      <StepHead {...transition} />
      <Navigation
        className="navigation"
        isTransition
        goBack={goBack}
        goNext={goNext}
        canGoBack={canGoBack}
        canGoNext={transition.canGoNext(answers)}
      />
    </div>
  );
}
