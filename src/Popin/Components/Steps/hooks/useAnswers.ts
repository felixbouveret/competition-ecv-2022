import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setAnswers } from "@/store/Steps";
import { Answer, answerId } from "@/types/step.interface";

export default function useAnswers() {
  const { answers } = useSelector((state: RootState) => state.steps);
  const dispatch = useDispatch();

  const addMultipleAnswer = (answerId: answerId) => {
    const answersToPush = [...answers];

    if (answers.includes(answerId))
      answersToPush.splice(answersToPush.indexOf(answerId), 1);
    else answersToPush.push(answerId);

    dispatch(setAnswers(answersToPush));
  };

  const addSingleAnswer = (
    answerId: answerId,
    currentQuestionAnswersArray: Answer[]
  ) => {
    const answersToPush = [...answers];
    currentQuestionAnswersArray.forEach((answer) => {
      if (answers.includes(answer.id))
        answersToPush.splice(answersToPush.indexOf(answer.id), 1);
    });
    answersToPush.push(answerId);

    dispatch(setAnswers(answersToPush));
  };

  const handleAnswer = (
    answerId: answerId,
    isMultiple: boolean,
    answerArray: Answer[]
  ) => {
    if (isMultiple) addMultipleAnswer(answerId);
    else addSingleAnswer(answerId, answerArray);
  };

  return { handleAnswer, answers, addSingleAnswer };
}
