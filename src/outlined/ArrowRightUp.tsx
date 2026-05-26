import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowRightUp = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M15.793 6.79297C16.1835 6.40244 16.8165 6.40244 17.207 6.79297C17.5976 7.18349 17.5976 7.81651 17.207 8.20703L8.70703 16.707C8.31651 17.0976 7.68349 17.0976 7.29297 16.707C6.90244 16.3165 6.90244 15.6835 7.29297 15.293L15.793 6.79297Z"/>
<path d="M15.5 16.5V8.5H7.5C6.94772 8.5 6.5 8.05228 6.5 7.5C6.5 6.94772 6.94772 6.5 7.5 6.5H16.5C17.0523 6.5 17.5 6.94772 17.5 7.5V16.5C17.5 17.0523 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.0523 15.5 16.5Z"/>
    </svg>
  )
);

ArrowRightUp.displayName = 'ArrowRightUp';
export default ArrowRightUp;
