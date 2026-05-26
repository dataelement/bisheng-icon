import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ToTop = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.0042 7.05023V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 13L12 7L18 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 3H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ToTop.displayName = 'ToTop';
export default ToTop;
