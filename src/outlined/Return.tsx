import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Return = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M6.4999 4L3 7L6.4999 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7H14.4969C17.9384 7 20.861 9.8102 20.9952 13.25C21.1369 16.8848 18.1335 20 14.4969 20H5.9992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Return.displayName = 'Return';
export default Return;
