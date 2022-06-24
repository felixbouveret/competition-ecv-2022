import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProgressBarDisplayed } from "@/store/App";
import { setAnswers } from "@/store/Steps";
import { LoaderStepInterface } from "@/types/step.interface";
import StepHead from "../StepHead";
import "./Loader.scss";

export default function Loader({
  loader,
  goNext,
}: {
  loader: LoaderStepInterface;
  goNext: any;
}) {
  const dispatch = useDispatch();
  const { answers } = useSelector((state: any) => state.steps);

  useEffect(() => {
    // @ts-ignore:next-line
    const transitionFlag = loader.id as transitionSteps;
    const answersToPush = [...answers];
    answersToPush.push(transitionFlag);
    dispatch(setAnswers(answersToPush));
    setTimeout(() => {
      dispatch(setProgressBarDisplayed(false));
      goNext(answersToPush);
    }, 1000);
  }, []);

  return (
    <div className="loaderRoot">
      <div className="loader" />
      <StepHead {...loader} />
    </div>
  );
}
