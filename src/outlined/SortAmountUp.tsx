import { forwardRef } from 'react';
import type { IconProps } from '../types';

const SortAmountUp = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11.5 4.5H21.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M2.5 8L6.5 4" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6.5 4V21" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M11.5 9.5H19.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M11.5 14.5H17.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M11.5 19.5H15.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

SortAmountUp.displayName = 'SortAmountUp';
export default SortAmountUp;
