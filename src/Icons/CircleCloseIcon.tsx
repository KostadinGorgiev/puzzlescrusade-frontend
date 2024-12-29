import React, { SVGAttributes } from "react";

const CircleCloseIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      fill="#ff474d"
      {...props}
    >
      <path
        id="circle-xmark"
        d="M12.435,7.685,10.619,9.5l1.815,1.815a.792.792,0,1,1-1.119,1.119L9.5,10.619,7.685,12.435a.792.792,0,0,1-1.119-1.119L8.381,9.5,6.565,7.685A.792.792,0,0,1,7.685,6.565L9.5,8.381l1.815-1.815a.792.792,0,0,1,1.119,1.119ZM19,9.5A9.5,9.5,0,1,1,9.5,0,9.511,9.511,0,0,1,19,9.5Zm-1.583,0A7.917,7.917,0,1,0,9.5,17.417,7.926,7.926,0,0,0,17.417,9.5Z"
        fill="inherit"
      />
    </svg>
  );
};

export default CircleCloseIcon;
