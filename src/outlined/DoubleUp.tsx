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
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 12L12 6L18 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18L12 12L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DoubleUp.displayName = 'DoubleUp';
export default DoubleUp;
