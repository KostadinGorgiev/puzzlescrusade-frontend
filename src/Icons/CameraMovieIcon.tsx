import React, { SVGAttributes } from "react";

const CameraMovieIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.517 19.517"
      fill="#221e33"
      {...props}
    >
      <path
        id="camera-movie"
        d="M18.518,9.047a1.656,1.656,0,0,0-1.582.255l-.8.642a4.486,4.486,0,0,0-1.9-2.7A4.262,4.262,0,1,0,8.132,1.291,4.262,4.262,0,1,0,2.026,7.239,4.47,4.47,0,0,0,0,10.978v4.066a4.477,4.477,0,0,0,4.473,4.473h7.319a4.477,4.477,0,0,0,4.33-3.373l.885.62a1.566,1.566,0,0,0,.938.313,1.588,1.588,0,0,0,.925-.3,1.646,1.646,0,0,0,.648-1.35V10.51a1.566,1.566,0,0,0-1-1.464ZM11.181,2.44a1.83,1.83,0,1,1-1.83,1.83A1.831,1.831,0,0,1,11.181,2.44Zm-6.1,0a1.83,1.83,0,1,1-1.83,1.83A1.831,1.831,0,0,1,5.082,2.44Zm8.742,12.6a2.036,2.036,0,0,1-2.033,2.033H4.473A2.036,2.036,0,0,1,2.44,15.044V10.978A2.036,2.036,0,0,1,4.473,8.945h7.319a2.036,2.036,0,0,1,2.033,2.033Z"
        fill="inherit"
      />
    </svg>
  );
};

export default CameraMovieIcon;