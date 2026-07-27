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
      <path d="M2.5 5C2.5 3.89543 3.39543 3 4.5 3H8.56325C9.15681 3 9.71971 3.26365 10.0997 3.71963L11.4003 5.28037C11.7803 5.73635 12.3402 6 12.9337 6C14.4505 6 17.4829 6 19.5024 6C20.607 6 21.5 6.89373 21.5 7.9983C21.5 10.9288 21.5 16.1514 21.5 19.0044C21.5 20.109 20.612 21 19.5075 21C15.8576 21 8.14081 21 4.49185 21C3.38728 21 2.5 20.1046 2.5 19V5Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M21.5 11H2.5" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

FolderClose.displayName = 'FolderClose';
export default FolderClose;
