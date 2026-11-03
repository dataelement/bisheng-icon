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
      <path d="M6 5H10C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 14H10C10.5523 14 11 14.4477 11 15V19C11 19.5523 10.5523 20 10 20H6C5.44772 20 5 19.5523 5 19V15C5 14.4477 5.44772 14 6 14Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M15 5H19C19.5523 5 20 5.44772 20 6V10C20 10.5523 19.5523 11 19 11H15C14.4477 11 14 10.5523 14 10V6C14 5.44772 14.4477 5 15 5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M19.5 14.5L14.5 19.5M19.5 14.5H14.5H19.5ZM19.5 14.5V19.5V14.5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

BlocksAndArrows.displayName = 'BlocksAndArrows';
export default BlocksAndArrows;
