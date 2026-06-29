import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowDown = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 21V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15L12 21L6 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDown.displayName = 'ArrowDown';
export default ArrowDown;
