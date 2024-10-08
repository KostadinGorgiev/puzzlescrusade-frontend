import React, { SVGAttributes } from 'react'

const CopyAltIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.833 19"
      fill="#eaeaea"
      {...props}
    >
      <path
        id="copy-alt"
        d="M10.708,15.833a3.963,3.963,0,0,0,3.958-3.958V4.942a3.145,3.145,0,0,0-.928-2.24L11.964.928A3.145,3.145,0,0,0,9.724,0H5.958A3.963,3.963,0,0,0,2,3.958v7.917a3.963,3.963,0,0,0,3.958,3.958ZM3.583,11.875V3.958A2.375,2.375,0,0,1,5.958,1.583s3.894.011,3.958.019V3.167A1.583,1.583,0,0,0,11.5,4.75h1.564c.008.064.019,7.125.019,7.125a2.375,2.375,0,0,1-2.375,2.375H5.958a2.375,2.375,0,0,1-2.375-2.375Zm14.25-5.542v8.708A3.963,3.963,0,0,1,13.875,19H6.75a.792.792,0,1,1,0-1.583h7.125a2.375,2.375,0,0,0,2.375-2.375V6.333a.792.792,0,1,1,1.583,0Z"
        transform="translate(-2)"
        fill="inherit"
      />
    </svg>
  )
}

export default CopyAltIcon
