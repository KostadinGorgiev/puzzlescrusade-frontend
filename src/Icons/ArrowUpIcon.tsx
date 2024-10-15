import React, { SVGAttributes } from "react";

const ArrowUpIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26.74 15.4"
      fill="#149d53"
      {...props}
    >
      <path
        id="caret-up"
        d="M7.436,23.814h22.7a2.03,2.03,0,0,0,1.421-3.472L20.226,9.015a2.03,2.03,0,0,0-2.883,0L6.015,20.343a2.03,2.03,0,0,0,1.421,3.472Z"
        transform="translate(-5.414 -8.414)"
        fill="inherit"
      />
    </svg>
  );
};

export default ArrowUpIcon;
