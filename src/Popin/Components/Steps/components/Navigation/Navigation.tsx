import React from "react";
import Button from "../../../../../Components/Button";
import "./Navigation.scss";
interface NavigationProps {
  isTransition?: boolean;
  goBack: () => void;
  goNext: () => void;
  canGoBack: boolean;
  className?: string;
}
export default function Navigation({
  isTransition,
  goBack,
  goNext,
  canGoBack,
  className,
}: NavigationProps) {
  const backButton = () => {
    if (canGoBack) return <Button onClick={goBack} isLight text="Précédent" />;
    return null;
  };

  const nextButtonWording = () => {
    if (isTransition) return "Commencer";
    return "Suivant";
  };

  return (
    <div className={isTransition ? "transition " : "" + className}>
      {backButton()}
      <Button onClick={() => goNext()} text={nextButtonWording()} />
    </div>
  );
}
