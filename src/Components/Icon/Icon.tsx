import arrowLeftIcon from "./Icons/arrowLeftIcon";
import crossIcon from "./Icons/crossIcon";

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
    return () => null;
  };
  return getIcon()({ color, size });
}
