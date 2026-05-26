import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FolderOpen = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2 4.5V20.5L4.5 10.5H19.75V7.5C19.75 6.9477 19.3023 6.5 18.75 6.5H12L9.5 3.5H3C2.44771 3.5 2 3.94771 2 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 20.5L22 10.5H4.40625L2 20.5H20Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FolderOpen.displayName = 'FolderOpen';
export default FolderOpen;
