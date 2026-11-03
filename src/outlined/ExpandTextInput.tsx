import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ExpandTextInput = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11 21H3V13" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M13 3H21V11" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

ExpandTextInput.displayName = 'ExpandTextInput';
export default ExpandTextInput;
