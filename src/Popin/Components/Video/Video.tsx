import "./Video.scss";
import Image from "../../../Components/Image";
import Icon from "../../../Components/Icon";

export default function Video({
  className,
  videoId,
  ...props
}: {
  className?: string;
  videoId: string;
  props?: any;
}) {
  return (
    <div className={"videoRoot " + className}>
      <div className="playButton">
        <Icon name="play-icon" />
      </div>
      <Image className="background" src="/videoaccueil.png" alt="" />
      <div className="blur" />
      <Image className="video mobile" src="/videoaccueil.png" alt="" />
      <Image className="video desktop" src="/videoaccueildesktop.png" alt="" />
    </div>
  );
}
