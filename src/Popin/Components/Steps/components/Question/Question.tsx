import React from "react";
import { QuestionStepInterface } from "../../../../../types/step.interface";
import AnswersList from "../AnswersList";
import QuestionHead from "../QuestionHead";
import "./Question.scss";

export default function Question(props: QuestionStepInterface) {
  return (
    <div className="questionRoot">
      <QuestionHead {...props} />
      <AnswersList answersArray={props.answers} isMultiple={props.isMultiple} />
    </div>
  );
}
