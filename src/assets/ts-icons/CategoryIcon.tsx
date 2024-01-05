import * as React from "react";
import { SVGProps } from "react";
const CategoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M2.333.333a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V2.333a2 2 0 0 0-2-2H2.333Zm1.334 6a.667.667 0 0 0 0 1.334h6.666a.667.667 0 1 0 0-1.334H3.667Zm-.667-2c0-.368.298-.666.667-.666h6.666a.667.667 0 1 1 0 1.333H3.667A.667.667 0 0 1 3 4.333ZM3.667 9a.667.667 0 0 0 0 1.333h6.666a.667.667 0 1 0 0-1.333H3.667Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CategoryIcon;
