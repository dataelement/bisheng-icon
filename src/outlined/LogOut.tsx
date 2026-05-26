import { forwardRef } from 'react';
import type { IconProps } from '../types';

const LogOut = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M15.293 6.29297C15.6835 5.90244 16.3165 5.90244 16.707 6.29297L21.707 11.293C22.0976 11.6835 22.0976 12.3165 21.707 12.707L16.707 17.707C16.3165 18.0976 15.6835 18.0976 15.293 17.707C14.9024 17.3165 14.9024 16.6835 15.293 16.293L19.5859 12L15.293 7.70703C14.9024 7.31651 14.9024 6.68349 15.293 6.29297Z"/>
<path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H21Z"/>
<path d="M2 19V5C2 4.20435 2.3163 3.44152 2.87891 2.87891C3.44152 2.3163 4.20435 2 5 2H10C10.5523 2 11 2.44772 11 3C11 3.55228 10.5523 4 10 4H5C4.73478 4 4.4805 4.10543 4.29297 4.29297C4.10543 4.4805 4 4.73478 4 5V19C4 19.2652 4.10543 19.5195 4.29297 19.707C4.48051 19.8946 4.73478 20 5 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H5C4.20435 22 3.44152 21.6837 2.87891 21.1211C2.3163 20.5585 2 19.7957 2 19Z"/>
    </svg>
  )
);

LogOut.displayName = 'LogOut';
export default LogOut;
