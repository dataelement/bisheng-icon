import { forwardRef } from 'react';
import type { IconProps } from '../types';

const File = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M5 22H19C19.5523 22 20 21.5523 20 21V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 17H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2V7H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

File.displayName = 'File';
export default File;
