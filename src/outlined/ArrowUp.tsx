import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowUp = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 3V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9L12 3L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUp.displayName = 'ArrowUp';
export default ArrowUp;
