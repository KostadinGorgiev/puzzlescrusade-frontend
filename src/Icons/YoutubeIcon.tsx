import React, { SVGAttributes } from 'react'

const YoutubeIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.453 13" {...props}>
      <g id="XMLID_184_" transform="translate(0 -3.546)">
        <path
          id="Path_17"
          data-name="Path 17"
          d="M18.067,5.576a2.319,2.319,0,0,0-1.632-1.642,54.865,54.865,0,0,0-7.209-.388,54.881,54.881,0,0,0-7.21.388A2.318,2.318,0,0,0,.386,5.576,24.3,24.3,0,0,0,0,10.046a24.3,24.3,0,0,0,.386,4.47,2.319,2.319,0,0,0,1.632,1.642,54.865,54.865,0,0,0,7.209.388,54.881,54.881,0,0,0,7.21-.388,2.321,2.321,0,0,0,1.632-1.642,24.347,24.347,0,0,0,.385-4.47A24.3,24.3,0,0,0,18.067,5.576ZM7.34,12.79V7.3l4.822,2.744Z"
          fill={props.fill ? props.fill : '#eaeaea'}
        />
      </g>
    </svg>
  )
}

export default YoutubeIcon
