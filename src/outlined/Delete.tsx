import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Delete = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M7.5 6L8.1 2.5H15.9L16.5 6" stroke="currentColor" strokeLinejoin="round"/>
<path d="M3 6H21" stroke="currentColor" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.5 6L17.5 21.5H6.5L5.5 6H18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 17.5H14.5" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
);

Delete.displayName = 'Delete';
export default Delete;
