import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BlocksAndArrows = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H6C5.44772 14 5 14.4477 5 15V19C5 19.5523 5.44772 20 6 20H10C10.5523 20 11 19.5523 11 19V15C11 14.4477 10.5523 14 10 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 5H15C14.4477 5 14 5.44772 14 6V10C14 10.5523 14.4477 11 15 11H19C19.5523 11 20 10.5523 20 10V6C20 5.44772 19.5523 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 14.5L14.5 19.5M19.5 14.5H14.5H19.5ZM19.5 14.5V19.5V14.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BlocksAndArrows.displayName = 'BlocksAndArrows';
export default BlocksAndArrows;
