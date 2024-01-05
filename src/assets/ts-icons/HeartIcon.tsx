import * as React from "react";
import { SVGProps } from "react";
const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#f4f5f6"}
      fillRule="evenodd"
      d="M12.052 1.078a5.416 5.416 0 0 1 7.079 7.079 5.416 5.416 0 0 1-1.175 1.757l-7.367 7.367a.833.833 0 0 1-1.178 0L2.044 9.914a5.418 5.418 0 1 1 7.662-7.662l.294.294.294-.293a5.417 5.417 0 0 1 1.758-1.175Z"
      clipRule="evenodd"
    />
  </svg>
);
export default HeartIcon;
