import { forwardRef } from 'react';
import type { IconProps } from '../types';

const RightTriangle = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10 6L16 12L10 18V6Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

RightTriangle.displayName = 'RightTriangle';
export default RightTriangle;
