import { forwardRef } from 'react';
import type { IconProps } from '../types';

const MoveToFolder = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2.5 9.0961V4C2.5 3.44771 2.94771 3 3.5 3H9.5L12 6H20.5C21.0523 6 21.5 6.4477 21.5 7V20C21.5 20.5523 21.0523 21 20.5 21H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11.8199L10.5 14.3199L8 16.8199" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 14.3199H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MoveToFolder.displayName = 'MoveToFolder';
export default MoveToFolder;
