import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DoubleUp = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11.3691 5.22462C11.7618 4.90427 12.3408 4.92686 12.707 5.29298L18.707 11.293C19.0975 11.6835 19.0975 12.3165 18.707 12.707C18.3164 13.0976 17.6834 13.0976 17.2929 12.707L11.9999 7.41407L6.70696 12.707C6.31643 13.0976 5.68342 13.0976 5.29289 12.707C4.90237 12.3165 4.90237 11.6835 5.29289 11.293L11.2929 5.29298L11.3691 5.22462Z"/>
<path d="M11.3691 11.2246C11.7618 10.9043 12.3408 10.9269 12.707 11.293L18.707 17.293C19.0975 17.6835 19.0975 18.3165 18.707 18.707C18.3164 19.0976 17.6834 19.0976 17.2929 18.707L11.9999 13.4141L6.70696 18.707C6.31643 19.0976 5.68342 19.0976 5.29289 18.707C4.90237 18.3165 4.90237 17.6835 5.29289 17.293L11.2929 11.293L11.3691 11.2246Z"/>
    </svg>
  )
);

DoubleUp.displayName = 'DoubleUp';
export default DoubleUp;
