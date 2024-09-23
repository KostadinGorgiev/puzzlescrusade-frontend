import React, { SVGAttributes } from 'react'

const TapIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.977 27.251"
      fill="#fa6648"
      {...props}
    >
      <path
        id="tap"
        d="M4.541,13.5a7.947,7.947,0,1,1,11.354,0V7.947a5.677,5.677,0,1,0-11.354,0Zm9.083,1.466V8.07a3.5,3.5,0,0,0-2.842-3.481A3.408,3.408,0,0,0,6.813,7.95V21.081l-1.084-.862a3.406,3.406,0,0,0-4.662,4.967l2.14,2.064H6.478L2.63,23.542a1.141,1.141,0,0,1-.053-1.609,1.161,1.161,0,0,1,1.669,0l4.837,3.851V7.947a1.139,1.139,0,0,1,1.335-1.119,1.233,1.233,0,0,1,.937,1.241v8.757L22.708,19.1v8.152h2.271V17.235L13.625,14.964Z"
        transform="translate(-0.001)"
        fill="inherit"
      />
    </svg>
  )
}

export default TapIcon
