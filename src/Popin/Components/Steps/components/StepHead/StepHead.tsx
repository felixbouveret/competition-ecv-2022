import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  QuestionStepInterface,
  TransitionStepInterface,
  LoaderStepInterface,
} from "@/types/step.interface";
import { forWhoStepEnum } from "@/types/stepsAnswers.enum";
import "./StepHead.scss";

export default function StepHead(
  props: QuestionStepInterface | TransitionStepInterface | LoaderStepInterface
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
    if (props.type === "loader")
      return <p className="description">{props.subtitle}</p>;
    return null;
  };

  const subtitle = () => {
    if (props.type === "loader") return null;
    return <p className="subtitle">{props.subtitle}</p>;
  };

  const subtitleIndex = () => {
    if (props.type === "transition")
      return <span className="subtitleIndex">{props.index}</span>;
    return null;
  };

  return (
    <div className="stepHead">
      {subtitleIndex()}
      {subtitle()}
      <h2 className="title">{title()}</h2>
      {description()}
    </div>
  );
}
