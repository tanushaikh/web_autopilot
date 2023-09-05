import React from "react";

const EyeCloseIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L21 21"
        stroke={color || "#64748B"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5845 10.587C10.2092 10.962 9.99823 11.4708 9.99805 12.0013C9.99786 12.5318 10.2084 13.0407 10.5835 13.416C10.9585 13.7913 11.4672 14.0022 11.9977 14.0024C12.5283 14.0026 13.0372 13.792 13.4125 13.417"
        stroke={color || "#64748B"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.363 5.365C10.2204 5.11972 11.1082 4.99684 12 5C16 5 19.333 7.333 22 12C21.222 13.361 20.388 14.524 19.497 15.488M17.357 17.349C15.726 18.449 13.942 19 12 19C8 19 4.667 16.667 2 12C3.369 9.605 4.913 7.825 6.632 6.659"
        stroke={color || "#64748B"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EyeCloseIcon;
