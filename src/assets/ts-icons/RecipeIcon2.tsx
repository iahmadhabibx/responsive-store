import * as React from "react";
import { SVGProps } from "react";
const RecipeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      d="M14.667.667h-4a2 2 0 0 0-2 2v6.666a.667.667 0 0 1-1.334 0V2.667a2 2 0 0 0-2-2h-4a.667.667 0 0 0-.666.666V10c0 .737.596 1.333 1.333 1.333h1.333v-3.44C2.547 7.627 2 6.9 2 6c0-1.133.867-3.333 2-3.333S6 4.867 6 6c0 .9-.547 1.627-1.333 1.893v3.44H6.85c.231.397.656.667 1.15.667.492 0 .917-.27 1.148-.667H14c.737 0 1.333-.596 1.333-1.333V1.333a.667.667 0 0 0-.666-.666ZM13.333 8h-2.666a.667.667 0 0 1 0-1.333h2.666a.667.667 0 0 1 0 1.333Zm0-3.333h-2.666a.667.667 0 0 1 0-1.334h2.666a.667.667 0 0 1 0 1.334Z"
    />
  </svg>
);
export default RecipeIcon2;
