import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Close = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3.29289 3.29295C3.68342 2.90243 4.31643 2.90243 4.70696 3.29295L20.707 19.293C21.0975 19.6835 21.0975 20.3165 20.707 20.707C20.3164 21.0975 19.6834 21.0975 19.2929 20.707L3.29289 4.70702C2.90237 4.31649 2.90237 3.68348 3.29289 3.29295Z"/>
<path d="M19.2929 3.29295C19.6834 2.90243 20.3164 2.90243 20.707 3.29295C21.0975 3.68348 21.0975 4.31649 20.707 4.70702L4.70696 20.707C4.31643 21.0975 3.68342 21.0975 3.29289 20.707C2.90237 20.3165 2.90237 19.6835 3.29289 19.293L19.2929 3.29295Z"/>
    </svg>
  )
);

Close.displayName = 'Close';
export default Close;
