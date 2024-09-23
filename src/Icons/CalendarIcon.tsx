import React, { SVGAttributes } from 'react'

const CalendarIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      id="calendar"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#eaeaea"
      {...props}
    >
      <path
        id="Path_16"
        data-name="Path 16"
        d="M19,2H18V1a1,1,0,1,0-2,0V2H8V1A1,1,0,1,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"
        fill="inherit"
      />
      <circle
        id="Ellipse_8"
        data-name="Ellipse 8"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(10.5 13.5)"
        fill="inherit"
      />
      <circle
        id="Ellipse_9"
        data-name="Ellipse 9"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(5.5 13.5)"
        fill="inherit"
      />
      <circle
        id="Ellipse_10"
        data-name="Ellipse 10"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(15.5 13.5)"
        fill="inherit"
      />
    </svg>
  )
}

export default CalendarIcon
