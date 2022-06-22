import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./ProgressBar.scss";

export default function ProgressBar() {
  const totalQuestions = useSelector(
    (state: RootState) => state.steps.totalQuestions
  );

  const questionIndex = useSelector(
    (state: RootState) => state.steps.questionIndex
  );

  return (
    <div className="progressContainer">
      <div
        className="progressBar"
        style={{ width: (questionIndex * 100) / totalQuestions + "%" }}
      ></div>
    </div>
  );
}