import React, { useEffect } from "react";
import "./Result.scss";
import { ResultStepInterface } from "@/types/step.interface";
import useAnswers from "../Steps/hooks/useAnswers";
import Recommandations from "./components/Recommandations";
import Graphs from "./components/Graphs";

interface IntroductionProps {
  result: ResultStepInterface;
}
export default function Result({ result }: IntroductionProps) {
  const { handleAnswer } = useAnswers();

  useEffect(() => {
    // @ts-ignore:next-line
    const resultFlag = result.id as transitionSteps;
    handleAnswer(resultFlag, false, []);
  }, []);

  return (
    <div className="resultRoot">
      <Recommandations className="recommandations" />
      <Graphs className="graphs" />
    </div>
  );
}
