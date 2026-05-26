import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Refresh = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20 12V4C20 3.44772 20.4477 3 21 3C21.5523 3 22 3.44772 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12Z"/>
<path d="M2 20V12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20Z"/>
<path d="M2 12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12C4 16.4183 7.58173 20 12 20C14.1584 20 16.1157 19.1468 17.5557 17.7568C17.953 17.3733 18.5862 17.3839 18.9697 17.7812C19.3533 18.1786 19.3417 18.8118 18.9443 19.1953C17.1465 20.9307 14.6971 22 12 22C6.47717 22 2 17.5228 2 12Z"/>
<path d="M20 12C20 7.58173 16.4183 4 12 4C9.73987 4.0001 7.70014 4.93616 6.24413 6.44434C5.86062 6.84161 5.22743 6.85308 4.83006 6.46973C4.43279 6.08622 4.42132 5.45303 4.80467 5.05566C6.62199 3.1731 9.17501 2.0001 12 2C17.5228 2 22 6.47717 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12Z"/>
    </svg>
  )
);

Refresh.displayName = 'Refresh';
export default Refresh;
