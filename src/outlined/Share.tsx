import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Share = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20 10V4H14C13.4477 4 13 3.55228 13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11C20.4477 11 20 10.5523 20 10Z"/>
<path d="M2 19.5V4.5C2 3.11929 3.11929 2 4.5 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H4.5C4.22386 4 4 4.22386 4 4.5V19.5C4 19.7762 4.22385 20 4.5 20H19.5C19.7762 20 20 19.7762 20 19.5V14.7373C20 14.185 20.4477 13.7373 21 13.7373C21.5523 13.7373 22 14.185 22 14.7373V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.1193 22 2 20.8807 2 19.5Z"/>
<path d="M19.8434 2.74296C20.2339 2.35264 20.867 2.3525 21.2574 2.74296C21.6477 3.13344 21.6477 3.76655 21.2574 4.15703L13.607 11.8074C13.2166 12.1977 12.5834 12.1977 12.193 11.8074C11.8025 11.417 11.8026 10.7839 12.193 10.3934L19.8434 2.74296Z"/>
    </svg>
  )
);

Share.displayName = 'Share';
export default Share;
