import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DoubleDown = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M17.2929 5.29295C17.6834 4.90243 18.3164 4.90243 18.707 5.29295C19.0975 5.68348 19.0975 6.31649 18.707 6.70702L12.707 12.707C12.3164 13.0975 11.6834 13.0975 11.2929 12.707L5.29289 6.70702C4.90237 6.31649 4.90237 5.68348 5.29289 5.29295C5.68342 4.90243 6.31643 4.90243 6.70696 5.29295L11.9999 10.5859L17.2929 5.29295Z"/>
<path d="M17.2929 11.293C17.6834 10.9024 18.3164 10.9024 18.707 11.293C19.0975 11.6835 19.0975 12.3165 18.707 12.707L12.707 18.707C12.3164 19.0975 11.6834 19.0975 11.2929 18.707L5.29289 12.707C4.90237 12.3165 4.90237 11.6835 5.29289 11.293C5.68342 10.9024 6.31643 10.9024 6.70696 11.293L11.9999 16.5859L17.2929 11.293Z"/>
    </svg>
  )
);

DoubleDown.displayName = 'DoubleDown';
export default DoubleDown;
