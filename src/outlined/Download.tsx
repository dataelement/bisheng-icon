import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Download = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V12.0039C2.00013 11.4517 2.4478 11.0039 3 11.0039C3.5522 11.0039 3.99987 11.4517 4 12.0039V20H20V12Z"/>
<path d="M15.793 10.793C16.1835 10.4024 16.8165 10.4024 17.207 10.793C17.5976 11.1835 17.5976 11.8165 17.207 12.207L12.707 16.707C12.3165 17.0976 11.6835 17.0976 11.293 16.707L6.79297 12.207C6.40244 11.8165 6.40244 11.1835 6.79297 10.793C7.18349 10.4024 7.81651 10.4024 8.20703 10.793L12 14.5859L15.793 10.793Z"/>
<path d="M10.9958 16V3C10.9958 2.44772 11.4436 2 11.9958 2C12.5481 2 12.9958 2.44772 12.9958 3V16C12.9958 16.5523 12.5481 17 11.9958 17C11.4436 17 10.9958 16.5523 10.9958 16Z"/>
    </svg>
  )
);

Download.displayName = 'Download';
export default Download;
