import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import {
  QuestionStepInterface,
  TransitionStepInterface,
} from "../../../../../types/step.interface";
import { forWhoStepEnum } from "../../../../../types/stepsAnswers.enum";
import "./StepHead.scss";

export default function StepHead(
  props: QuestionStepInterface | TransitionStepInterface
) {
  const { answers } = useSelector((state: RootState) => state.steps);

  const title = () => {
    if (
      props.type === "question" &&
      props.titleForOther &&
      answers.includes(forWhoStepEnum.OTHER)
    )
      return props.titleForOther;
    return props.title;
  };

  const description = () => {
    if (props.type === "question" && props.isMultiple)
      return <p className="description">(Plusieurs réponses possibles)</p>;
    if (props.type === "transition")
      return <p className="description">{props.description}</p>;
    return null;
  };

  const subtitleIndex = () => {
    if (props.type === "transition")
      return <span className="subtitleIndex">{props.index}</span>;
    return null;
  };

  return (
    <div className="stepHead">
      {subtitleIndex()}
      <p className="subtitle">{props.subtitle}</p>
      <h2 className="title">{title()}</h2>
      {description()}
    </div>
  );
}
