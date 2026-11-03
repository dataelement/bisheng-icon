import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ListSuccess = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10 5H22" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M10 12H22" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M10 19H22" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 19C6 20.1046 5.10457 21 4 21C2.89543 21 2 20.1046 2 19C2 17.8954 2.89543 17 4 17C5.10457 17 6 17.8954 6 19Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M2 5L3.5 6.5L6.5 3.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

ListSuccess.displayName = 'ListSuccess';
export default ListSuccess;
