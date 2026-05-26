import { forwardRef } from 'react';
import type { IconProps } from '../types';

const SquareSmall = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M17 6H7C6.4477 6 6 6.4477 6 7V17C6 17.5523 6.4477 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.4477 17.5523 6 17 6Z" strokeWidth="2"/>
    </svg>
  )
);

SquareSmall.displayName = 'SquareSmall';
export default SquareSmall;
