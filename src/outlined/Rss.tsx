import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Rss = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330085_4636)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M4 22V3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V22L12 17.8636L4 22Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M11.9749 6.97485V12.9749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.97485 9.97485H14.9749" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330085_4636">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

Rss.displayName = 'Rss';
export default Rss;
