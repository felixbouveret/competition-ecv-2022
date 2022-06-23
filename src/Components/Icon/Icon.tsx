import grape from "./Icons/grape";
import {
  arrowLeftIcon,
  cartIcon,
  crossIcon,
  heartIcon,
  logoLight,
  logoPurple,
  shopLocation,
  verifiedBadge,
} from "./Icons/index";
import mouth from "./Icons/mouth";
import nose from "./Icons/nose";
import shop from "./Icons/shop";
import shoppingBag from "./Icons/shoppingBag";

interface PropsInterface {
  name: string;
  color?: string;
  size?: number;
}

export default function Icon({
  name,
  color = "white",
  size = 20,
}: PropsInterface) {
  const getIcon = () => {
    if (name === "arrow-left") return arrowLeftIcon;
    if (name === "cross") return crossIcon;
    if (name === "logo-light") return logoLight;
    if (name === "logo-purple") return logoPurple;
    if (name === "heart-icon") return heartIcon;
    if (name === "cart-icon") return cartIcon;
    if (name === "virified-badge") return verifiedBadge;
    if (name === "shop-location") return shopLocation;
    if (name === "shopping-bag") return shoppingBag;
    if (name === "shop") return shop;
    if (name === "grape") return grape;
    if (name === "nose") return nose;
    if (name === "mouth") return mouth;
    return () => null;
  };
  return getIcon()({ color, size });
}
