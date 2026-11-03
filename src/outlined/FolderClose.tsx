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
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.49185 21C8.14081 21 15.8576 21 19.5075 21C20.612 21 21.5 20.109 21.5 19.0044C21.5 16.1514 21.5 10.9288 21.5 7.9983C21.5 6.89373 20.607 6 19.5024 6C17.4829 6 14.4505 6 12.9337 6C12.3402 6 11.7803 5.73635 11.4003 5.28037L10.0997 3.71963C9.71971 3.26365 9.15681 3 8.56325 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.38728 21 4.49185 21Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M21.5 11H2.5" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

FolderClose.displayName = 'FolderClose';
export default FolderClose;
