import React from "react";
import { answerId } from "@/types/step.interface";
import { getSteps } from "../stepsList";
import flow from "../flow.json";
import { stepsNameEnum } from "@/types/stepsName.enum";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import { setProgress } from "@/store/Steps";
import { setCurrentStepType } from "../../../../store/App";

export default function useSteps() {
  const dispatch = useDispatch();
  const allSteps = getSteps();

  const { answers } = useSelector((state: RootState) => state.steps);
  const [currentStepId, setCurrentStepId] = React.useState<string>();
  const currentStep = allSteps.find((step) => step.id === currentStepId);

  const updateProgress = (): void => {
    const currentStepIndex = flow.findIndex((id) => id === currentStepId);
    const totalSteps = flow.length;
    const progress = ((currentStepIndex + 1) / totalSteps) * 100;

    dispatch(setProgress(progress));
  };

  const canGoBack = (): boolean => {
    const stepIndex = flow.findIndex((i) => i === currentStepId);
    return stepIndex > 0;
  };

  const goNext = async (customAnswers?: answerId[]) => {
    let nextStepId = currentStepId;
    const answerArray = customAnswers || answers;

    for (const stepId of flow) {
      const step = allSteps.find((s) => s.id === stepId);
      if (!step) continue;

      if (
        step.canGoNext(answerArray) === false &&
        step.shouldBeSkipped(answerArray) === false
      ) {
        nextStepId = step.id;
        dispatch(setCurrentStepType(step.type));
        break;
      }
    }
    setCurrentStepId(nextStepId);
    updateProgress();
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
