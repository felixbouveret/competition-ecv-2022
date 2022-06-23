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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.00006C6.486 2.00006 2 6.48608 2 12.0001C2 17.5141 6.486 22.0001 12 22.0001C17.514 22.0001 22 17.5141 22 12.0001H20C20 16.411 16.411 20 12 20C7.58899 20 4 16.411 4 12.0001C4 7.58907 7.58899 4.00006 12 4.00006C14.4604 4.00006 16.6549 5.12461 18.123 6.87699L16 9.00008H22V3.00006L19.5293 5.47078C17.6963 3.35572 15.0116 2.00006 12 2.00006ZM11 6.00008V11.586L8.29296 14.293L9.70704 15.7071L13 12.4141V6.00008H11Z"
        fill={color}
      />
    </svg>
  );
}
