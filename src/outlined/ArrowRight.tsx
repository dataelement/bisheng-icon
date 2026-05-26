import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowRight = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18 11.0042C18.5523 11.0042 19 11.4519 19 12.0042C19 12.5564 18.5523 13.0042 18 13.0042H6C5.44772 13.0042 5 12.5564 5 12.0042C5 11.4519 5.44772 11.0042 6 11.0042H18Z"/>
<path d="M11.2929 5.29295C11.6834 4.90243 12.3164 4.90243 12.707 5.29295L18.707 11.293C19.0975 11.6835 19.0975 12.3165 18.707 12.707L12.707 18.707C12.3164 19.0975 11.6834 19.0975 11.2929 18.707C10.9024 18.3165 10.9024 17.6835 11.2929 17.293L16.5859 12L11.2929 6.70702C10.9024 6.31649 10.9024 5.68348 11.2929 5.29295Z"/>
    </svg>
  )
);

ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
