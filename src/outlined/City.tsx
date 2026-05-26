import { forwardRef } from 'react';
import type { IconProps } from '../types';

const City = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M22 20C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H22Z"/>
<path d="M5 14V20H7V14H5ZM9 20C9 21.1046 8.10457 22 7 22H5C3.89543 22 3 21.1046 3 20V14C3 12.8954 3.89543 12 5 12H7C8.10457 12 9 12.8954 9 14V20Z"/>
<path d="M8 16C8.55228 16 9 16.4477 9 17C9 17.5523 8.55228 18 8 18H4C3.44771 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H8Z"/>
<path d="M9 3V20H19V3H9ZM21 20C21 21.1046 20.1046 22 19 22H9C7.89543 22 7 21.1046 7 20V3C7 1.89543 7.89543 1 9 1H19C20.1046 1 21 1.89543 21 3V20Z"/>
<path d="M13 5H11V7H13V5Z"/>
<path d="M17 5H15V7H17V5Z"/>
<path d="M13 8.5H11V10.5H13V8.5Z"/>
<path d="M17 8.5H15V10.5H17V8.5Z"/>
<path d="M17 12H15V14H17V12Z"/>
<path d="M17 15.5H15V17.5H17V15.5Z"/>
    </svg>
  )
);

City.displayName = 'City';
export default City;
