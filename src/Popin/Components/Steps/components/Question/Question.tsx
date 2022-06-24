import React from "react";
import { answerId, QuestionStepInterface } from "@/types/step.interface";
import useAnswers from "../../hooks/useAnswers";
import AnswersList from "../AnswersList";
import Navigation from "../Navigation";
import StepHead from "../StepHead";
import "./Question.scss";
interface QuestionProps {
  goBack: () => void;
  goNext: () => void;
  canGoBack: boolean;
  question: QuestionStepInterface;
}
export default function Question({
  goBack,
  goNext,
  canGoBack,
  question,
}: QuestionProps) {
  const { answers, handleAnswer } = useAnswers();
  const addAnswer = (id: answerId) =>
    handleAnswer(id, question.isMultiple, question.answers);

  return (
    <div className="questionRoot">
      <StepHead {...question} />
      <AnswersList
        answersArray={question.answers}
        onClick={addAnswer}
        selectedAnswers={answers}
      />
      <Navigation
        className="navigation"
        goBack={goBack}
        goNext={goNext}
        canGoBack={canGoBack}
        canGoNext={question.canGoNext(answers)}
      />
    </div>
  );
}
