import { forwardRef } from 'react';
import type { IconProps } from '../types';

const SortAmountDown = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11.5 4H21.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M7 20.5L3 16.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M7 3.5V20.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M11.5 9H19.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M11.5 14H17.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M11.5 19H15.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

SortAmountDown.displayName = 'SortAmountDown';
export default SortAmountDown;
