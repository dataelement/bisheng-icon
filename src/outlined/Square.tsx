import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Square = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20 4.5C20 4.22385 19.7762 4 19.5 4H4.5C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7762 4.22385 20 4.5 20H19.5C19.7762 20 20 19.7762 20 19.5V4.5ZM22 19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.1193 22 2 20.8807 2 19.5V4.5C2 3.11929 3.11929 2 4.5 2H19.5C20.8807 2 22 3.1193 22 4.5V19.5Z"/>
    </svg>
  )
);

Square.displayName = 'Square';
export default Square;
