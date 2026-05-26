import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DownTriangle = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18 9.5L12 15.5L6 9.5H18Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

DownTriangle.displayName = 'DownTriangle';
export default DownTriangle;
