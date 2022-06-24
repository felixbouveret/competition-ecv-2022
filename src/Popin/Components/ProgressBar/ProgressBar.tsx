import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import "./ProgressBar.scss";

export default function ProgressBar() {
  const progress = useSelector((state: RootState) => state.steps.progress);

  return (
    <div className="progressContainer">
      <div className="progressBar" style={{ width: progress + "%" }}></div>
    </div>
  );
}
