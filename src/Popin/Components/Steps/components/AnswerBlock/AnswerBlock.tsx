import React from "react";
import { Answer, answerId } from "../../../../../types/step.interface";
import "./AnswerBlock.scss";
import classNames from "classnames";
import Image from "../../../../../Components/Image";

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
      <Image className="icon" src={answer.icon} alt="" />
      {answer.description && (
        <div className="answerDescription">{answer.description}</div>
      )}
    </div>
  );
}
