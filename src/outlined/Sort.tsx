import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Sort = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3 5.75H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12.25H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 5.75V18.75L21 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18.75H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Sort.displayName = 'Sort';
export default Sort;
