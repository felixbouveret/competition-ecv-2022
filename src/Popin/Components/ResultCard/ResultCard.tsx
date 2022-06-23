import React from "react";
import "./ResultCard.scss";
import Icon from "../../../Components/Icon";
import { ProductInterface } from "../../../types/product.interface";

export default function ResultCard({
  title,
  shop,
  compatibility,
  tags,
  price,
  image,
}: ProductInterface) {
  return (
    <div className="resultCard">
      <img src={image} alt="" />
      <div className="personalisation">
        <p>{compatibility}% de compatibilité</p>
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
          <div className="circle">
            <Icon name="cart-icon" />
          </div>
        </div>
      </section>
    </div>
  );
}
