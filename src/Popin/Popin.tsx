import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HeaderContainer from "./Components/Header";
import Steps from "./Components/Steps";
import ProductDetails from "./Components/ProductDetails";
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  const productId = useSelector((state: RootState) => state.app.productId);

  if (isVisible)
    return (
      <section className="popinContainer">
        <HeaderContainer isLight={false} />
        <Steps />
        <ProductDetails productId={productId} />
      </section>
    );
  return null;
}
