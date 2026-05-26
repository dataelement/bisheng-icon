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
      <path d="M1.5 20V4C1.5 2.89543 2.39543 2 3.5 2H9.5C9.79674 2 10.0786 2.13144 10.2686 2.35938L12.4688 5H20.5C21.6046 5 22.5 5.89542 22.5 7V20C22.5 21.1046 21.6046 22 20.5 22H3.5C2.39544 22 1.5 21.1046 1.5 20ZM3.5 20H20.5V7H12C11.7033 7 11.4214 6.86856 11.2314 6.64062L9.03125 4H3.5V20Z"/>
<path d="M21.5 10V12H2.5V10H21.5Z"/>
<path d="M1.5 14V8C1.5 7.44772 1.94772 7 2.5 7C3.05228 7 3.5 7.44772 3.5 8V14C3.5 14.5523 3.05228 15 2.5 15C1.94772 15 1.5 14.5523 1.5 14Z"/>
<path d="M20.5 14V8C20.5 7.44772 20.9477 7 21.5 7C22.0523 7 22.5 7.44772 22.5 8V14C22.5 14.5523 22.0523 15 21.5 15C20.9477 15 20.5 14.5523 20.5 14Z"/>
    </svg>
  )
);

FolderClose.displayName = 'FolderClose';
export default FolderClose;
