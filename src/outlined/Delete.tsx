import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Delete = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330063_59)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M7.5 6L8.1 2.5H15.9L16.5 6" strokeWidth="2" strokeLinejoin="round"/>
<path d="M3 6H21" strokeWidth="2" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.5 6L17.5 21.5H6.5L5.5 6H18.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 17.5H14.5" strokeWidth="2" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_330063_59">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

Delete.displayName = 'Delete';
export default Delete;
