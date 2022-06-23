import React from "react";

export default function timeIcon({
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
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 18V0L14 9L0 18Z" fill="white" />
    </svg>
  );
}
