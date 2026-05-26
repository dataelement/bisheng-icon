import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileAddition = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20 11.5V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 14.5V21.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 18H16.5H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2V7H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileAddition.displayName = 'FileAddition';
export default FileAddition;
