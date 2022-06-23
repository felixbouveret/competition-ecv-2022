import React, { useState } from "react";
import Icon from "../../../Components/Icon";
import { ProductDetailsInterface } from "../../../types/product.interface";
import { useDispatch } from "react-redux";
import "./ProductDetails.scss";
import Image from "../../../Components/Image";
import ProfileChart from "../ProfileChart";
import Result from "../Result";
import { setIsProductDetailsDisplayed } from "../../../store/App";

export default function ProductDetails({
  productId,
  isDisplayed,
}: {
  productId: ProductDetailsInterface;
  isDisplayed: boolean;
}) {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const productDetails = productId;
  console.log("productDetails", productDetails);
  if (isDisplayed)
    return (
      <>
        <div className="backdrop"></div>
        <div className="productDetailsContainer">
          <div className="desktopImage">
            <Image src="/wineBottleCentered.png" alt="" />
          </div>
          <div className="headerContent">
            <div className="circle">
              <Icon name="arrow-left" />
            </div>
            <Icon name="logo-purple" />
            <div className="circle circleNone"></div>
          </div>
          <div className="productDetails">
            <div
              className="closeDetails"
              onClick={() => dispatch(setIsProductDetailsDisplayed(false))}
            >
              <Icon name="cross" color="#E2E6F5" />
            </div>
            <div className="wineBottle">
              <Image src="/wineBottle.png" alt="" />
            </div>
            <>
              <p className="compatibility">{productDetails.compatibility}</p>
              <p className="title">{productDetails.title}</p>
              <p className="shop">{productDetails.shop}</p>
              <div className="tags">
                {productDetails.tags.map((tag, i) => (
                  <p key={i} className="tag">
                    {tag}
                  </p>
                ))}
              </div>
              <p className="price">{productDetails.price}</p>
              <p className="ttc">Prix TTC</p>
              <div className="advices">
                <div className="adviceContainer">
                  <div className="adviceTitleContainer">
                    <Icon name="virified-badge" />
                    <p className="adviceTitle">Service</p>
                  </div>
                  <div className="adviceDescription">
                    {productDetails.advices?.map((advice, i) => (
                      <>
                        <p className="advice">{advice.title}</p>
                        <p className="advice">{advice.description}</p>
                      </>
                    ))}
                  </div>
                </div>

                <div className="adviceContainer">
                  <div className="adviceTitleContainer">
                    <Icon name="shop-location" />
                    <p className="adviceTitle">Région</p>
                  </div>
                  <div className="adviceDescription">
                    <p className="region">{productDetails.region}</p>
                  </div>
                </div>
              </div>
              <div className="quantityContainer">
                <p>Quantité</p>
                <div className="quantitiesBtn">
                  <button
                    className="quantitySelect quantityLess"
                    onClick={
                      quantity === 1
                        ? undefined
                        : () => setQuantity((prev: number) => prev - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="quantityInput"
                    value={quantity}
                  />
                  <button
                    className="quantitySelect quantityMore"
                    onClick={() => setQuantity((prev: number) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="addCart">
                <button className="cart">
                  <Icon name="shopping-bag" />
                  Ajouter au panier
                </button>
                <button className="shopCart">
                  <Icon name="shop" />
                  Reserver en magasin
                </button>
              </div>
            </>
            <div className="profileChartContainer">
              <ProfileChart
                title={productDetails.details?.title}
                description={productDetails.details?.description}
                rgb={productDetails.details?.rgb}
                datas={productDetails.details?.datas}
              />
            </div>
            <div className="wineInfo">
              {productDetails.infos.map((info, i) => (
                <>
                  <div
                    className={
                      "wineInfoTitleContainer" +
                      " " +
                      `${i === 0 ? "" : "infoBorderTop"}`
                    }
                  >
                    <Icon name={info.icon} />
                    <p>{info.title}</p>
                  </div>
                  <p className="wineInfoDescription">{info.description}</p>
                </>
              ))}
            </div>
            <div className="wineSelection">
              <p>Accords mêts-vin : </p>
              <p className="wineSelectionDescription">
                Une sélection personnalisée de produits pour ajouter la touche
                finale à votre dîner
              </p>
              <div className="carousel">
                <Result
                  title={"Comté AOP"}
                  image={"/assets/img/comté.png"}
                  shop={"Maison Conqueut"}
                  price={"5,73"}
                  tags={[]}
                />
                <Result
                  title={"Tortellini fourées"}
                  image={"/assets/img/tortelliniFourees.png"}
                  shop={"Épiceries Otsuni"}
                  price={"6,99€"}
                  tags={[]}
                />
              </div>
            </div>
            <div className="deliveryContainer">
              <p className="deliveryTitle">
                Option de livraison de {productDetails.shop}
              </p>

              {productDetails.delivery.map((item, i) => (
                <>
                  <div
                    className={
                      "deliveryContent" +
                      " " +
                      `${i === 0 ? "" : "deliveryBorderTop"}`
                    }
                  >
                    <div className="deliveryTitleContainer">
                      <Image src={item.icon} alt="" />
                      <p className="deliveryTitleContent">{item.title}</p>
                    </div>
                    <p className="deliveryDate">{item.date}</p>
                    <p className="deliveryDescription">{item.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  return null;
}
function dispatch(arg0: any): void {
  throw new Error("Function not implemented.");
}
