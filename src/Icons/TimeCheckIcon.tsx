import React, { SVGAttributes } from 'react'

const TimeCheckIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      id="Layer_1"
      height={512}
      viewBox="0 0 24 24"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      {...props}
    >
      <path d="m17.485 23.3 6.515-6.515-2.121-2.121-6.079 6.077-3.1-3.19-2.158 2.079 3.512 3.616a2.379 2.379 0 0 0 1.71.754h.036a2.374 2.374 0 0 0 1.685-.7zm-7.485-17.3v5.379l-2.561 2.56 2.122 2.122 3.439-3.44v-6.621z" />
      <path d="m12 0a11.992 11.992 0 0 0 -3 23.605v-3.13a9.014 9.014 0 1 1 11.941-7.475h3.008c.028-.331.051-.662.051-1a12.013 12.013 0 0 0 -12-12z" />
    </svg>
  )
}

export default TimeCheckIcon
