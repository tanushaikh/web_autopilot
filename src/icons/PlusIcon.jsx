import React from "react";

const PlusIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "25"}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.5V19.5"
        stroke={color || "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12.5H19"
        stroke={color || "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
