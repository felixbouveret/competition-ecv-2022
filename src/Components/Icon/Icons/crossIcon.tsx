import React from "react";

export default function crossIcon({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.62609 4L4.78204 4.82346L9.93799 9.85366L4.78204 14.8839L5.62609 15.7073L10.782 10.6771L15.938 15.7073L16.782 14.8839L11.6261 9.85366L16.782 4.82346L15.938 4L10.782 9.0302L5.62609 4Z"
        fill={color}
        stroke={color}
        stroke-width="0.5"
      />
    </svg>
  );
}
