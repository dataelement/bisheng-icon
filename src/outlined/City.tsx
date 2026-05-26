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
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g clipPath="url(#clip0_330044_101487)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M2 21H22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H5C4.44772 13 4 13.4477 4 14V20C4 20.5523 4.44772 21 5 21H7C7.55228 21 8 20.5523 8 20V14C8 13.4477 7.55228 13 7 13Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M4 17L8 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 2H9C8.44772 2 8 2.44772 8 3V20C8 20.5523 8.44772 21 9 21H19C19.5523 21 20 20.5523 20 20V3C20 2.44772 19.5523 2 19 2Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M13 5H11V7H13V5Z"/>
<path d="M17 5H15V7H17V5Z"/>
<path d="M13 8.5H11V10.5H13V8.5Z"/>
<path d="M17 8.5H15V10.5H17V8.5Z"/>
<path d="M17 12H15V14H17V12Z"/>
<path d="M17 15.5H15V17.5H17V15.5Z"/>
</g>
<defs>
<clipPath id="clip0_330044_101487">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

City.displayName = 'City';
export default City;
