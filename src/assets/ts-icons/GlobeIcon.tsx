import * as React from "react";
import { SVGProps } from "react";
const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      d="M7 .333A6.655 6.655 0 0 0 1.68 3h-.013v.018A6.62 6.62 0 0 0 .333 7c0 3.674 2.993 6.667 6.667 6.667S13.667 10.674 13.667 7 10.674.333 7 .333Zm2 1.723A5.32 5.32 0 0 1 12.333 7a5.31 5.31 0 0 1-1.4 3.6c-.171-.54-.67-.933-1.266-.933A.667.667 0 0 1 9 9V7.667A.667.667 0 0 0 8.333 7H5.667a.667.667 0 0 1 0-1.333A.667.667 0 0 0 6.333 5v-.667c0-.368.299-.666.667-.666h.667C8.403 3.667 9 3.07 9 2.333v-.277ZM1.805 5.805 5 9v.667C5 10.403 5.597 11 6.333 11v1.288a5.32 5.32 0 0 1-4.528-6.483Z"
    />
  </svg>
);
export default GlobeIcon;
