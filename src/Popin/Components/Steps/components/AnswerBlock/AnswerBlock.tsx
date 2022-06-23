import React from "react";
import { Answer, answerId } from "../../../../../types/step.interface";
import "./AnswerBlock.scss";
import classNames from "classnames";

export default function AnswerBlock({
  answer,
  isActive,
  onClick,
  className,
}: {
  answer: Answer;
  isActive: boolean;
  onClick: (id: answerId) => void;
  className?: string;
}) {
  const classes = classNames({
    answerContent: true,
    isActive,
  });
  return (
    <div
      className={classes + " " + className}
      id={answer.id}
      onClick={() => onClick(answer.id)}
    >
      <div className="icon">{answer.icon}</div>
      {answer.description && (
        <div className="answerDescription">{answer.description}</div>
      )}
    </div>
  );
}
