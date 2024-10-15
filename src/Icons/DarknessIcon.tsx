import React, { SVGAttributes } from "react";

const DarknessIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.031 12"
      fill="#eaeaea"
      {...props}
    >
      <path
        id="moon"
        d="M12.7,7.03a.547.547,0,0,0-.629.153,3.342,3.342,0,0,1-2.717.886C7.263,8.069,5.97,7.506,5.97,4.7a3.405,3.405,0,0,1,.889-2.711.547.547,0,0,0,.147-.628.535.535,0,0,0-.555-.33,6.011,6.011,0,0,0,.576,12,5.993,5.993,0,0,0,6-5.442A.546.546,0,0,0,12.7,7.03Z"
        transform="translate(-1 -1.029)"
        fill="inherit"
      />
    </svg>
  );
};

export default DarknessIcon;
