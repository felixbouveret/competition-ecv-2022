import React from "react";
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  if (isVisible) return <section className="popinContainer"></section>;
  return null;
}
