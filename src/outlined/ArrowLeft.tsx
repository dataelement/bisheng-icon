import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18 10.9958C18.5523 10.9958 19 11.4436 19 11.9958C19 12.5481 18.5523 12.9958 18 12.9958H6C5.44772 12.9958 5 12.5481 5 11.9958C5 11.4436 5.44772 10.9958 6 10.9958H18Z"/>
<path d="M11.293 5.29295C11.6835 4.90243 12.3165 4.90243 12.707 5.29295C13.0976 5.68348 13.0976 6.31649 12.707 6.70702L7.41406 12L12.707 17.293C13.0976 17.6835 13.0976 18.3165 12.707 18.707C12.3165 19.0975 11.6835 19.0975 11.293 18.707L5.29297 12.707C4.90244 12.3165 4.90244 11.6835 5.29297 11.293L11.293 5.29295Z"/>
    </svg>
  )
);

ArrowLeft.displayName = 'ArrowLeft';
export default ArrowLeft;
