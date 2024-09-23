import React, { SVGAttributes } from 'react'

const TriAngleIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="#fb6648"
      {...props}
    >
      <g
        id="Polygon_1"
        data-name="Polygon 1"
        transform="translate(12 12) rotate(180)"
        fill="none"
      >
        <path d="M6,0l6,12H0Z" stroke="none" />
        <path
          d="M 6 2.236069679260254 L 1.618035316467285 11 L 10.38196468353271 11 L 6 2.236069679260254 M 6 0 L 12 12 L 0 12 L 6 0 Z"
          stroke="none"
          fill={props.fill ? props.fill : '#fb6648'}
        />
      </g>
    </svg>
  )
}

export default TriAngleIcon
