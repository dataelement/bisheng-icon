import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DoubleUp = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330095_3411)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M6 12L12 6L18 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18L12 12L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330095_3411">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

DoubleUp.displayName = 'DoubleUp';
export default DoubleUp;
