import React from "react";
import "./ResultCard.scss";
import Icon from "../../../Components/Icon";
import { ProductInterface } from "../../../types/product.interface";
import { useDispatch } from "react-redux";
import { setProductId } from "@/store/App";

export default function ResultCard({
  title,
  shop,
  compatibility,
  tags,
  price,
  image,
}: ProductInterface) {
  const dispatch = useDispatch();
  return (
    <div className="resultCard">
      <img src={image} alt="" />
      <div className="personalisation">
        <div>
          {compatibility && (
            <p>
              {compatibility}
              "% de compatibilité"
            </p>
          )}
        </div>

        <div className="circle">
          <Icon name="heart-icon" />
        </div>
      </div>
      <section className="content">
        <div className="description">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
        <h4>{title}</h4>
        <p className="winery">{shop}</p>
        <div className="selling">
          <p>{price} €</p>
          <button
            className="circle"
            onClick={() => dispatch(setProductId("id"))}
          >
            <Icon name="cart-icon" />
          </button>
        </div>
      </section>
    </div>
  );
}
