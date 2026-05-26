import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FolderClose = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2.5 4C2.5 3.44771 2.94771 3 3.5 3H9.5L12 6H20.5C21.0523 6 21.5 6.4477 21.5 7V20C21.5 20.5523 21.0523 21 20.5 21H3.5C2.94771 21 2.5 20.5523 2.5 20V4Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M21.5 11H2.5" strokeWidth="2" strokeLinejoin="round"/>
<path d="M2.5 8V14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 8V14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FolderClose.displayName = 'FolderClose';
export default FolderClose;
