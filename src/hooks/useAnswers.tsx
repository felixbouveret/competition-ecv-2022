import React, { useState } from "react";

export default function useAnswers() {
  const [answers, setAnswers] = useState<string[]>([]);

  const handleMultipleAnswer = (answerId: string) => {
    const answersToPush = [...answers];

    if (answers.includes(answerId))
      answersToPush.splice(answersToPush.indexOf(answerId), 1);
    else answersToPush.push(answerId);

    setAnswers(answersToPush);
  };

  const handleAnswer = (answerId: string) => {
    const answersToPush = [...answers];
    answersToPush.splice(0, 1, answerId);
    setAnswers(answersToPush);
  };

  return { handleMultipleAnswer, handleAnswer, answers };
}
