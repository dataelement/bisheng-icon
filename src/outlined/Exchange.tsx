import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Exchange = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M6.12598 10.0437H17.8688" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.12598 13.9578H17.8688" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.8704 10.0423L13.3037 5.47559" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6926 18.5244L6.12598 13.9578" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Exchange.displayName = 'Exchange';
export default Exchange;
