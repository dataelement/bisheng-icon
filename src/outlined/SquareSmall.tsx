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
      <path d="M7 7V17H17V7H7ZM19 17C19 18.1046 18.1046 19 17 19H7C5.89542 19 5 18.1046 5 17V7C5 5.89542 5.89542 5 7 5H17C18.1046 5 19 5.89542 19 7V17Z"/>
    </svg>
  )
);

SquareSmall.displayName = 'SquareSmall';
export default SquareSmall;
