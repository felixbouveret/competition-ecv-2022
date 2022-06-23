import React from "react";
import { useSelector } from "react-redux";
import { product } from "../data/productDetails";
import { RootState } from "../store";
import HeaderContainer from "./Components/Header";
<<<<<<< HEAD
import Steps from "./Components/Steps";
=======
import ProductDetails from "./Components/ProductDetails";
>>>>>>> 6e6f0db (add producDetails component)
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  const isProductDetailsDisplayed = useSelector(
    (state: RootState) => state.app.isProductDetailsDisplayed
  );

  if (isVisible)
    return (
      <section className="popinContainer">
        <HeaderContainer isLight={false} />
<<<<<<< HEAD
        <Steps />
=======
        <ProductDetails
          productId={product}
          isDisplayed={isProductDetailsDisplayed}
        />
>>>>>>> 6e6f0db (add producDetails component)
      </section>
    );
  return null;
}
