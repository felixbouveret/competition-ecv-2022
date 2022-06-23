import React from "react";

export default function shoppingBag({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2C6.62695 2 5.5 3.12695 5.5 4.5V5H3.03125L3 5.46874L2.5 14.4687L2.46875 15H13.5313L13.5 14.4687L13 5.46874L12.9687 5H10.5V4.5C10.5 3.12695 9.37306 2 8 2ZM8 3C8.82813 3 9.5 3.67188 9.5 4.5V5H6.5V4.5C6.5 3.67188 7.17187 3 8 3ZM3.96874 6H5.5V7.5H6.5V6H9.5V7.5H10.5V6H12.0313L12.4687 14H3.53127L3.96874 6Z"
        fill="white"
      />
    </svg>
  );
}
