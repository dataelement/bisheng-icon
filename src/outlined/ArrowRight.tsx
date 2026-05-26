import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowRight = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18 12.0042H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6L18 12L12 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
