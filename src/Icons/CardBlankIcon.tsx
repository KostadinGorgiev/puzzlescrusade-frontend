import React, { SVGAttributes } from 'react'

const CardBlankIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M23.799,8.156l-3.413,10.398c-.447,1.519-1.57,2.658-2.952,3.203,.365-.847,.568-1.779,.568-2.758V9c0-3.86-3.141-7-7-7h-1.665C10.566,.381,12.723-.408,14.782,.221l5.686,1.746c2.604,.8,4.098,3.576,3.331,6.189Zm-7.797,.844v10c0,2.757-2.243,5-5,5H5.002C2.245,24,.002,21.757,.002,19V9C.002,6.243,2.245,4,5.002,4h6c2.757,0,5,2.243,5,5Z" />
    </svg>
  )
}

export default CardBlankIcon