import { forwardRef } from 'react';
import type { IconProps } from '../types';

const CollapseTextInput = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M22 10H14V2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M2 14H10V22" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

CollapseTextInput.displayName = 'CollapseTextInput';
export default CollapseTextInput;
