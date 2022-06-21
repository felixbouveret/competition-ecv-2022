import { arrowLeftIcon, crossIcon, logoLight, logoPurple } from "./Icons/index";

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
    return () => null;
  };
  return getIcon()({ color, size });
}
