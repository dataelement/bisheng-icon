import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DoubleDown = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18 6L12 12L6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12L12 18L6 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DoubleDown.displayName = 'DoubleDown';
export default DoubleDown;
