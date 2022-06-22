import React from "react";
interface PropsInterface {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: PropsInterface) {
  return (
    <img src={`${process.env.REACT_APP_BASE_IMAGE_PATH}${src}`} alt={alt} />
  );
}
