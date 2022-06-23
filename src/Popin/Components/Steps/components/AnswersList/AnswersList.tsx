import { Answer, answerId } from "../../../../../types/step.interface";
import useAnswers from "../../hooks/useAnswers";
import AnswerBlock from "../AnswerBlock";
import "./AnswersList.scss";

export default function AnswerContent({
  isMultiple,
  answersArray,
}: {
  isMultiple: boolean;
  answersArray: Answer[];
}) {
  const { answers, handleAnswer } = useAnswers();

  return (
    <div className="answersList">
      {answersArray.map((answer, index) => (
        <AnswerBlock
          className="answerItem"
          answer={answer}
          key={index}
          isActive={answers.includes(answer.id)}
          onClick={(id: answerId) => handleAnswer(id, isMultiple, answersArray)}
        />
      ))}
    </div>
  );
}
