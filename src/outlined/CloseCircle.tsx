import { forwardRef } from 'react';
import type { IconProps } from '../types';

const CloseCircle = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M14.8282 9.17163L9.17139 14.8285" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.17163 9.17163L14.8285 14.8285" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CloseCircle.displayName = 'CloseCircle';
export default CloseCircle;
