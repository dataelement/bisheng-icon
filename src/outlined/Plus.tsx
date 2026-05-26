import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Plus = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12.0315 4C12.5837 4.00072 13.0311 4.44885 13.0306 5.00098L13.012 19.001C13.0113 19.5532 12.5632 20.0005 12.011 20C11.4588 19.9993 11.0115 19.5512 11.012 18.999L11.0306 4.99902C11.0313 4.44678 11.4793 3.99935 12.0315 4Z"/>
<path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19Z"/>
    </svg>
  )
);

Plus.displayName = 'Plus';
export default Plus;
