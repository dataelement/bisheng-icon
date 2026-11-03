import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Send = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21.5 2.5L14.85 21.5L11.05 12.95L2.5 9.15L21.5 2.5Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M21.5 2.5L11.05 12.95" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

Send.displayName = 'Send';
export default Send;
