import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileExport = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20 11.5V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H11" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M18.5 16.5L21 19L18.5 21.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M21 19H13V15" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M15 2V7H20" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

FileExport.displayName = 'FileExport';
export default FileExport;
