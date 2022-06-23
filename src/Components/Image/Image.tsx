import React from "react";
interface PropsInterface {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className }: PropsInterface) {
  return (
    <img
      className={className}
      src={`${process.env.REACT_APP_BASE_IMAGE_PATH}${src}`}
      alt={alt}
    />
  );
}
