import { forwardRef } from 'react';
import type { IconProps } from '../types';

const List = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14C5.10455 14 6 13.1046 6 12C6 10.8954 5.10455 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M4 6C4.55229 6 5 5.5523 5 5C5 4.44771 4.55229 4 4 4C3.44771 4 3 4.44771 3 5C3 5.5523 3.44771 6 4 6Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M4 20C4.55229 20 5 19.5523 5 19C5 18.4477 4.55229 18 4 18C3.44771 18 3 18.4477 3 19C3 19.5523 3.44771 20 4 20Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M10 12H22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 19H22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5H22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

List.displayName = 'List';
export default List;
