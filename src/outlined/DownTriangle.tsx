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
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 8.5C18.4044 8.5 18.769 8.74359 18.9238 9.11719C19.0786 9.49086 18.993 9.92103 18.707 10.207L12.707 16.207C12.3165 16.5976 11.6835 16.5976 11.2929 16.207L5.29294 10.207C5.00694 9.92103 4.92136 9.49086 5.07614 9.11719C5.23095 8.74359 5.59556 8.5 5.99997 8.5H18ZM12 14.0859L15.5859 10.5H8.41403L12 14.0859Z"/>
    </svg>
  )
);

DownTriangle.displayName = 'DownTriangle';
export default DownTriangle;
