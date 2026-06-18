import { forwardRef } from 'react';
import type { IconProps } from '../types';

const CornerDownLeft = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M8 9L4 13L8 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 5V11.5C20 12.3285 19.3285 13 18.5 13H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CornerDownLeft.displayName = 'CornerDownLeft';
export default CornerDownLeft;
