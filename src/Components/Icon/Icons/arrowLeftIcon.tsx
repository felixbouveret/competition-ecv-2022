import React from "react";

export default function arrowLeftIcon({
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8371 2.89771L12.7083 3.76892L6.47729 9.99998L12.7083 16.2311L11.8371 17.1022L5.17045 10.4356L4.75379 9.99998L5.17045 9.56439L11.8371 2.89771Z"
        fill="#7A1047"
        stroke="#7A1047"
        stroke-width="0.5"
      />
    </svg>
  );
}
