import React from "react";
import {
  TransitionStepInterface,
  QuestionStepInterface,
} from "../../../../types/step.interface";
import { getSteps } from "../stepsList";
import flow from "../flow.json";
import { stepsNameEnum } from "../../../../types/stepsName.enum";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export default function useSteps() {
  const allSteps = getSteps();

  const { answers } = useSelector((state: RootState) => state.steps);
  const [currentStepId, setCurrentStepId] = React.useState<string>(
    stepsNameEnum.FOR_WHO_STEP
  );
  const currentStep = allSteps.find(
    (step: QuestionStepInterface | TransitionStepInterface): boolean =>
      step.id === currentStepId
  );

  const canGoBack = (): boolean => {
    const stepIndex = flow.findIndex((i) => i === currentStepId);
    return stepIndex > 0;
  };

  const goNext = async () => {
    let nextStepId = currentStepId;
    console.log(answers);

    for (const stepId of flow) {
      const step = allSteps.find((s) => s.id === stepId);
      if (!step) continue;
      console.log({
        id: step.id,
        shouldBeSkipped: step.shouldBeSkipped(answers),
        canGoNext: step.canGoNext(answers),
      });

      if (
        step.canGoNext(answers) === false &&
        step.shouldBeSkipped(answers) === false
      ) {
        nextStepId = step.id;
        break;
      }
    }
    setCurrentStepId(nextStepId);
  };

  const goBack = async () => {
    let previousStepId = currentStepId;
    const reversedFlow = [...flow].reverse();

    for (const stepId of reversedFlow) {
      const step = allSteps.find((s) => s.id === stepId);
      if (!step) continue;

      if (!step.canGoNext(answers) && !step.shouldBeSkipped(answers)) {
        previousStepId = step.id;
        break;
      }
    }
    setCurrentStepId(previousStepId);
  };

  return {
    currentStep,
    goNext,
    goBack,
    canGoBack,
  };
}
