import React, { SVGAttributes } from 'react'

const TelegramIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.731 13" {...props}>
      <g id="Layer_2" transform="translate(-2.5 -10.725)">
        <path
          id="Path_18"
          data-name="Path 18"
          d="M16.9,10.839c-2.075.859-10.974,4.545-13.432,5.55-1.649.643-.684,1.247-.684,1.247s1.408.483,2.614.844a2.363,2.363,0,0,0,1.85-.04l5.67-3.821c2.011-1.367,1.528-.241,1.046.241-1.046,1.046-2.775,2.694-4.223,4.022a.762.762,0,0,0-.04,1.287c1.046.885,3.9,2.694,4.062,2.815.85.6,2.521,1.467,2.775-.362l1.005-6.314c.322-2.131.643-4.1.684-4.665.121-1.367-1.327-.8-1.327-.8Z"
          fill={props.fill ? props.fill : '#eaeaea'}
        />
      </g>
    </svg>
  )
}

export default TelegramIcon
