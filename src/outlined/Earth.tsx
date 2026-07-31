import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Earth = forwardRef<SVGSVGElement, IconProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C14.2092 22 16 17.5229 16 12C16 6.47715 14.2092 2 12 2C9.79085 2 8 6.47715 8 12C8 17.5229 9.79085 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.66968 9H21.3303" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.66968 15H21.3303" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Earth.displayName = 'Earth';
export default Earth;
