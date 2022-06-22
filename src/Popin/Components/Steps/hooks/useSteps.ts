import React, { useEffect } from "react";
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

  const goNext = async () => {
    let nextStepId = currentStepId;
    for (const stepId of flow) {
      const step = allSteps.find((s) => s.id === stepId);
      if (!step) continue;
      if (
        !step.answers?.some((a) => answers.includes(a.id)) &&
        !step.shouldBeSkipped(answers)
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
      if (
        step.answers?.some((a) => answers.includes(a.id)) &&
        !step.shouldBeSkipped(answers)
      ) {
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
  };
}
