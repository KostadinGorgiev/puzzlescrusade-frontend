import React, { SVGAttributes } from 'react'

const ArrowLineIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.32 16" {...props}>
      <g id="Group_7" data-name="Group 7" transform="translate(-88.8 -336)">
        <line
          id="Line_2"
          data-name="Line 2"
          x2={86}
          transform="translate(89.5 344)"
          fill="none"
          stroke="#aaa"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          id="angle-right"
          d="M6.942,16.017,6,15.075l6.592-6.592a.667.667,0,0,0,0-.943L6.011.96,6.955.017,13.534,6.6a2,2,0,0,1,0,2.83Z"
          transform="translate(163 335.983)"
          fill="#aaa"
        />
      </g>
    </svg>
  )
}

export default ArrowLineIcon
