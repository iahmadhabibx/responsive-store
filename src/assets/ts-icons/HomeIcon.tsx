import * as React from "react";
import { SVGProps } from "react";
const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#f4f5f6"}
      d="M8.875 1.874 2.708 6.667A1.833 1.833 0 0 0 2 8.114v9.97c0 .506.41.916.917.916h3.5c.506 0 .916-.41.916-.917v-4.466c0-.507.41-.917.917-.917h3.5c.506 0 .917.41.917.917v4.466c0 .507.41.917.916.917h3.5c.507 0 .917-.41.917-.917V8.114c0-.566-.261-1.1-.708-1.447l-6.167-4.793a1.833 1.833 0 0 0-2.25 0Z"
    />
  </svg>
);
export default HomeIcon;
