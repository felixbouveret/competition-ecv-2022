import React from "react";
import HeaderContainer from "./Header";
import Question from "./Question";
import { QuestionStepInterface } from "../types/step.interface";
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  const myQuestion: QuestionStepInterface = {
    id: "1",
    title: "Pour qui cherchez-vous du vin ?",
    description: "(Plusieurs réponses possibles)",
    type: "question",
    isMultiple: true,
    answers: [
      {
        icon: "/",
        description: "Pour moi",
        id: "1",
      },
      {
        icon: "/",
        description: "Quelqu’un d’autre",
        id: "2",
      },
      {
        icon: "/",
        description: "Quelqu’un d’autre",
        id: "3",
      },
      {
        icon: "/",
        description: "Quelqu’un d’autre",
        id: "4",
      },
    ],
  };
  if (isVisible)
    return (
      <section className="popinContainer">
        <HeaderContainer isLight={false} />
        <Question questionData={myQuestion} />
      </section>
    );
  return null;
}
