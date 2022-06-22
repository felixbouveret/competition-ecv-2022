import React, { useState } from "react";
import { Answer } from "../../../types/step.interface";
import "./Answer.scss";

export default function AnswerContent({
  answer,
  isActive,
  onClick,
}: {
  answer: Answer;
  isActive: boolean;
  onClick: any;
}) {
  console.log("isActive", isActive);
  return (
    <div
      className={
        "answerContent" +
        " " +
        `${isActive ? "active" : "inactive"}
        `
      }
      id={answer.id}
      onClick={() => onClick(answer.id)}
    >
      <div className="icon"></div>
      <div className="answerDescription">{answer.description}</div>
    </div>
  );
}
