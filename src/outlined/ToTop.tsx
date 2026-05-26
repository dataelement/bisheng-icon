import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ToTop = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11.0042 21.0004V7.05025C11.0042 6.49797 11.4519 6.05025 12.0042 6.05025C12.5564 6.05025 13.0042 6.49797 13.0042 7.05025V21.0004C13.0039 21.5525 12.5563 22.0004 12.0042 22.0004C11.452 22.0004 11.0044 21.5525 11.0042 21.0004Z"/>
<path d="M11.3691 6.22461C11.7619 5.90426 12.3409 5.92685 12.707 6.29297L18.707 12.293C19.0976 12.6835 19.0976 13.3165 18.707 13.707C18.3165 14.0976 17.6835 14.0976 17.293 13.707L12 8.41406L6.70703 13.707C6.31651 14.0976 5.68349 14.0976 5.29297 13.707C4.90244 13.3165 4.90244 12.6835 5.29297 12.293L11.293 6.29297L11.3691 6.22461Z"/>
<path d="M18 2C18.5523 2 19 2.44772 19 3C19 3.55228 18.5523 4 18 4H6C5.44772 4 5 3.55228 5 3C5 2.44772 5.44772 2 6 2H18Z"/>
    </svg>
  )
);

ToTop.displayName = 'ToTop';
export default ToTop;
