import * as React from "react";
import { SVGProps } from "react";
const RecipesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#f4f5f6"}
      d="M1.259.333a.833.833 0 0 0-.833.834v10.139c0 .46.373.833.833.833h4.908c.652 0 1.278.249 1.74.691.461.443.72 1.044.72 1.67V3.48c0-.834-.345-1.635-.96-2.226a3.352 3.352 0 0 0-2.32-.922H1.259ZM16.741.333c.46 0 .833.373.833.834v10.139c0 .46-.373.833-.833.833h-4.908c-.652 0-1.278.249-1.74.691a2.314 2.314 0 0 0-.72 1.67V3.481c0-.834.345-1.635.96-2.226a3.352 3.352 0 0 1 2.32-.922h4.088Z"
    />
  </svg>
);
export default RecipesIcon;
