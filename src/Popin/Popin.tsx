import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import HeaderContainer from "./Components/Header";
<<<<<<< HEAD
import Steps from "./Components/Steps";
=======
import ProductDetails from "./Components/ProductDetails";
>>>>>>> 6e6f0db (add producDetails component)
import "./Popin.scss";

export default function PopinContainer({ isVisible }: { isVisible: boolean }) {
  const productId = useSelector((state: RootState) => state.app.productId);

  if (isVisible)
    return (
      <section className="popinContainer">
        <HeaderContainer isLight={false} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Steps />
=======
        <ProductDetails
          productId={product}
          isDisplayed={isProductDetailsDisplayed}
        />
>>>>>>> 6e6f0db (add producDetails component)
=======
        <ProductDetails productId={productId} />
>>>>>>> 0c8514f (change of the store for the display of the product detail)
      </section>
    );
  return null;
}
