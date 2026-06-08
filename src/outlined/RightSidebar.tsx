import { forwardRef } from 'react';
import type { IconProps } from '../types';

const RightSidebar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
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
      <path d="M3 4.5C3 3.67158 3.67158 3 4.5 3H19.5C20.3285 3 21 3.67158 21 4.5V19.5C21 20.3285 20.3285 21 19.5 21H4.5C3.67158 21 3 20.3285 3 19.5V4.5Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M15 3V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 3H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

RightSidebar.displayName = 'RightSidebar';
export default RightSidebar;
