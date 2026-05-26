import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Up = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11.8691 8.22462C12.2618 7.90427 12.8408 7.92686 13.207 8.29298L19.207 14.293C19.5975 14.6835 19.5975 15.3165 19.207 15.707C18.8164 16.0976 18.1834 16.0976 17.7929 15.707L12.4999 10.4141L7.20696 15.707C6.81643 16.0976 6.18342 16.0976 5.79289 15.707C5.40237 15.3165 5.40237 14.6835 5.79289 14.293L11.7929 8.29298L11.8691 8.22462Z"/>
    </svg>
  )
);

Up.displayName = 'Up';
export default Up;
