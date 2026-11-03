import { forwardRef } from 'react';
import type { IconProps } from '../types';

const City = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2 21H22" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M5 13H7C7.55228 13 8 13.4477 8 14V20C8 20.5523 7.55228 21 7 21H5C4.44772 21 4 20.5523 4 20V14C4 13.4477 4.44772 13 5 13Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M4 17L8 17" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M9 2H19C19.5523 2 20 2.44772 20 3V20C20 20.5523 19.5523 21 19 21H9C8.44772 21 8 20.5523 8 20V3C8 2.44772 8.44772 2 9 2Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M13 5H11V7H13V5Z" fill="currentColor"/>
<path d="M17 5H15V7H17V5Z" fill="currentColor"/>
<path d="M13 8.5H11V10.5H13V8.5Z" fill="currentColor"/>
<path d="M17 8.5H15V10.5H17V8.5Z" fill="currentColor"/>
<path d="M17 12H15V14H17V12Z" fill="currentColor"/>
<path d="M17 15.5H15V17.5H17V15.5Z" fill="currentColor"/>
    </svg>
  )
);

City.displayName = 'City';
export default City;
