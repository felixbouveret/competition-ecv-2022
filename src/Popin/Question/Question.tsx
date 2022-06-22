import React, { useEffect, useState } from "react";
import useAnswers from "../../hooks/useAnswers";
import { QuestionStepInterface } from "../../types/step.interface";
import Answer from "./Answer";

import "./Question.scss";

export default function Question({
  questionData,
}: {
  questionData: QuestionStepInterface;
}) {
  const { handleMultipleAnswer, handleAnswer, answers } = useAnswers();

  const handleAnswerClick = (answerId: string) => {
    if (questionData.isMultiple) handleMultipleAnswer(answerId);
    else handleAnswer(answerId);
  };

  return (
    <section className="questionContainer">
      <div className="heading">
        <p className="questionTitle">{questionData.title}</p>
        <p className="questionDescription">{questionData.description}</p>
      </div>
      <div className="answerContainer">
        {questionData.answers.map((answer, i) => (
          <Answer
            answer={answer}
            isActive={answers.includes(answer.id)}
            onClick={handleAnswerClick}
            key={i}
          />
        ))}
      </div>
      <div className="buttons">
        <div className="nextPrev">
          <button>Précédent</button>
          <button>Suivant</button>
        </div>
        <button className="why">Pourquoi ?</button>
      </div>
    </section>
  );
}
