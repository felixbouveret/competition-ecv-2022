import React from "react";

export default function mouth({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  return (
    <svg
      width="16"
      height="7"
      viewBox="0 0 16 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.646086 2.50163C0.545947 2.53606 0.534821 2.68524 0.623833 2.74262L5.65304 5.62295C6.56542 6.11639 7.28865 6.42622 8.1899 6.42622C9.15791 6.42622 9.87001 6.09344 10.8714 5.51967L15.3777 2.74262C15.4667 2.68524 15.4555 2.54754 15.3554 2.51311L11.2386 0.780323C10.4597 0.459012 9.58072 0.53934 8.87974 1.02131L8.65721 1.17049C8.42356 1.33114 8.11201 1.31967 7.88948 1.13606C7.21076 0.585241 6.29838 0.436061 5.48614 0.734422L0.646086 2.50163Z"
        stroke="#7A1047"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.556641 2.60498C0.556641 2.60498 8.26735 4.4181 15.444 2.60498"
        stroke="#7A1047"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
