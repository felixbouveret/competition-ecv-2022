import { Answer, answerId } from "../../../../../types/step.interface";
import useAnswers from "../../hooks/useAnswers";
import AnswerBlock from "../AnswerBlock";
import "./AnswersList.scss";

export default function AnswerContent({
  answersArray,
  onClick,
  selectedAnswers,
}: {
  answersArray: Answer[];
  onClick: (answerId: answerId) => void;
  selectedAnswers: answerId[];
}) {
  return (
    <div className="answersList">
      {answersArray.map((answer, index) => (
        <AnswerBlock
          className="answerItem"
          answer={answer}
          key={index}
          isActive={selectedAnswers.includes(answer.id)}
          onClick={() => onClick(answer.id)}
        />
      ))}
    </div>
  );
}
