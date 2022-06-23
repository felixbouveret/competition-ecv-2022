import React from "react";
import Button from "../../../../../Components/Button";

interface NavigationProps {
  goBack: () => void;
  goNext: () => void;
  canGoBack: boolean;
  className?: string;
}
export default function Navigation({
  goBack,
  goNext,
  canGoBack,
  className,
}: NavigationProps) {
  const backButton = () => {
    if (canGoBack) return <Button onClick={goBack} isLight text="Précédent" />;
    return null;
  };
  return (
    <div className={className}>
      {backButton()}
      <Button onClick={goNext} text="Suivant" />
    </div>
  );
}
