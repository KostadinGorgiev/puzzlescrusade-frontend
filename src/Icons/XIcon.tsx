import React, { SVGAttributes } from 'react'

const XIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.381 13"
      fill="#eaeaea"
      {...props}
    >
      <path
        id="twitter-alt"
        d="M11.325,1.153h2.206L8.713,6.659l5.669,7.494H9.944L6.466,9.609,2.491,14.153H.281L5.434,8.262,0,1.153H4.55L7.69,5.306l3.634-4.153ZM10.55,12.834h1.222L3.884,2.4H2.572L10.55,12.834Z"
        transform="translate(0 -1.153)"
        fill="inherit"
      />
    </svg>
  )
}

export default XIcon
