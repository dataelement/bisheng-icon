import { forwardRef } from 'react';
import type { IconProps } from '../types';

const SidebarMenu = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M4 6H20" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M4 12H20" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M4 18H16" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

SidebarMenu.displayName = 'SidebarMenu';
export default SidebarMenu;
