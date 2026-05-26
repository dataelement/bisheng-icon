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
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 22V3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V22L12 17.8636L4 22Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M11.9749 6.97485V12.9749" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.97485 9.97485H14.9749" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Rss.displayName = 'Rss';
export default Rss;
