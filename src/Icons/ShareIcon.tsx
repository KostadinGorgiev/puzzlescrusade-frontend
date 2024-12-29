import React, { SVGAttributes } from "react";

const ShareIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.996 11.997"
      fill="#aaa"
      {...props}
    >
      <path
        id="share-square"
        d="M9,9.245a2.754,2.754,0,0,1-2.749,2.749h-3.5A2.754,2.754,0,0,1,0,9.245v-3.5A2.754,2.754,0,0,1,2.749,3a.75.75,0,0,1,0,1.5A1.25,1.25,0,0,0,1.5,5.746v3.5a1.25,1.25,0,0,0,1.25,1.25h3.5A1.25,1.25,0,0,0,7.5,9.245a.75.75,0,1,1,1.5,0Zm2.5-6.722L9.287.229a.749.749,0,0,0-1.08,1.04L9.871,3H6.747A2.754,2.754,0,0,0,4,5.746v2.5a.75.75,0,0,0,1.5,0v-2.5A1.25,1.25,0,0,1,6.747,4.5H9.871L8.207,6.226a.75.75,0,0,0,.54,1.27.738.738,0,0,0,.54-.23l2.194-2.279a1.744,1.744,0,0,0,.01-2.464Z"
        transform="translate(0 0.003)"
        fill="inherit"
      />
    </svg>
  );
};

export default ShareIcon;
