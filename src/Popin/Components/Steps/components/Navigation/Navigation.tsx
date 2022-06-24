import React from "react";
import Button from "@/Components/Button";
import "./Navigation.scss";
import classNames from "classnames";
import Icon from "@/Components/Icon";
import { useDispatch } from "react-redux";
import { setVideoDisplayed } from "@/store/App";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
interface NavigationProps {
  isTransition?: boolean;
  isIntroduction?: boolean;
  goBack: () => void;
  goNext: () => void;
  canGoNext: boolean;
  canGoBack: boolean;
  className?: string;
}
export default function Navigation({
  isTransition,
  isIntroduction,
  goBack,
  goNext,
  canGoNext,
  canGoBack,
  className,
}: NavigationProps) {
  const dispatch = useDispatch();
  const { currentStepType } = useSelector((state: RootState) => state.app);
  const backButton = () => {
    if (canGoBack) return <Button onClick={goBack} isLight text="Précédent" />;
    return null;
  };

  const nextButtonWording = () => {
    if (isIntroduction) return "Pousser la porte";
    if (isTransition) return "Commencer";
    return "Suivant";
  };

  const classes = classNames({
    isTransition,
    isIntroduction,
  });

  return (
    <>
      <div className={classes + " " + className}>
        {backButton()}
        <Button
          isWhiteMobile={isIntroduction}
          onClick={() => (canGoNext ? goNext() : null)}
          text={nextButtonWording()}
        />
      </div>
      {["question"].includes(currentStepType) && (
        <div
          className="videoCta"
          onClick={() => dispatch(setVideoDisplayed(true))}
        >
          <Icon name="video" />
          <p>Pourquoi cette question ?</p>
        </div>
      )}
    </>
  );
}
