import React from "react";
import Button from "@/Components/Button";
import "./Navigation.scss";
import classNames from "classnames";
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
    <div className={classes + " " + className}>
      {backButton()}
      <Button
        isWhiteMobile={isIntroduction}
        onClick={() => (canGoNext ? goNext() : null)}
        text={nextButtonWording()}
      />
    </div>
  );
}
