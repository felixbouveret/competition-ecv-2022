import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import {
  QuestionStepInterface,
  TransitionStepInterface,
} from "../../../../../types/step.interface";
import { forWhoStepEnum } from "../../../../../types/stepsAnswers.enum";
import "./QuestionHead.scss";

export default function QuestionHead(
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
    if (props.type === "transition") return <p>{props.index}</p>;
    return null;
  };

  return (
    <div className="questionHead">
      <span className="subtitleIndex">{subtitleIndex()}</span>
      <p className="subtitle">{props.subtitle}</p>
      <h2 className="title">{title()}</h2>
      {description()}
    </div>
  );
}
