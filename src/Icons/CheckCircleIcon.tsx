import React, { SVGAttributes } from 'react'

const CheckCircleIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      fill="#4b4955"
      {...props}
    >
      <path
        id="check-circle"
        d="M7.589,3.791a.416.416,0,0,1-.006.589L5.739,6.19A1.658,1.658,0,0,1,3.416,6.2l-.791-.778a.417.417,0,1,1,.584-.594L4,5.6A.828.828,0,0,0,5.156,5.6L7,3.785a.416.416,0,0,1,.589.005ZM10,5A5,5,0,1,1,5,0,5.006,5.006,0,0,1,10,5ZM9.167,5A4.167,4.167,0,1,0,5,9.167,4.171,4.171,0,0,0,9.167,5Z"
        fill="inherit"
      />
    </svg>
  )
}

export default CheckCircleIcon
