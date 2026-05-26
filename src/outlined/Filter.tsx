import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Filter = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330069_1721)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M3 4.5L10.2 12.9089V19.2222L13.8 21V12.9089L21 4.5H3Z" strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330069_1721">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

Filter.displayName = 'Filter';
export default Filter;
