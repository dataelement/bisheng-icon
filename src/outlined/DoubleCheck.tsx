import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DoubleCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2.2, ...props }, ref) => (
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
      <path d="M19.1 5.67578L7 17.7758L1.5 12.2758" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.5001 10.0742L14.2501 18.3242L12.6001 16.6742" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DoubleCheck.displayName = 'DoubleCheck';
export default DoubleCheck;
