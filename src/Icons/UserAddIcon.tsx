import React, { SVGAttributes } from 'react'

const UserAddIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      id="user-add"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="#eaeaea"
      {...props}
    >
      <path
        id="Path_13"
        data-name="Path 13"
        d="M6.875,14H3.125A3.129,3.129,0,0,0,0,17.125V20.25H1.875V17.125a1.25,1.25,0,0,1,1.25-1.25h3.75a1.25,1.25,0,0,1,1.25,1.25V20.25H10V17.125A3.129,3.129,0,0,0,6.875,14Z"
        transform="translate(0 -5.25)"
        fill="inherit"
      />
      <path
        id="Path_14"
        data-name="Path 14"
        d="M5.75,7.5A3.75,3.75,0,1,0,2,3.75,3.75,3.75,0,0,0,5.75,7.5Zm0-5.625A1.875,1.875,0,1,1,3.875,3.75,1.875,1.875,0,0,1,5.75,1.875Z"
        transform="translate(-0.75 0)"
        fill="inherit"
      />
      <path
        id="Path_15"
        data-name="Path 15"
        d="M18.75,8.875V7H16.875V8.875H15V10.75h1.875v1.875H18.75V10.75h1.875V8.875Z"
        transform="translate(-5.625 -2.625)"
        fill="inherit"
      />
    </svg>
  )
}

export default UserAddIcon
