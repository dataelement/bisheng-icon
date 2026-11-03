import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ApprovalSubmitted = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21.5 12.3704V8.5H2.5V20C2.5 20.5523 2.94771 21 3.5 21H12" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M2.5 4.5C2.5 3.94771 2.94771 3.5 3.5 3.5H20.5C21.0523 3.5 21.5 3.94771 21.5 4.5V8.5H2.5V4.5Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M8 2V6" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M16 2V6" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 17H9" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 13H11" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M19.8408 16.4934L16.8408 13.5L13.8408 16.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M16.8408 13.5V20.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

ApprovalSubmitted.displayName = 'ApprovalSubmitted';
export default ApprovalSubmitted;
