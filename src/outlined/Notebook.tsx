import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Notebook = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M5 3V21H19V3H5ZM21 21C21 22.1046 20.1046 23 19 23H5C3.89544 23 3 22.1046 3 21V3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89544 21 3V21Z"/>
<path d="M7 22V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22Z"/>
<path d="M16 5C16.5523 5 17 5.44772 17 6C17 6.55228 16.5523 7 16 7H12C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5H16Z"/>
<path d="M16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H12C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9H16Z"/>
<path d="M11 1C11.5523 1 12 1.44772 12 2C12 2.55228 11.5523 3 11 3H5C4.44772 3 4 2.55228 4 2C4 1.44772 4.44772 1 5 1H11Z"/>
<path d="M11 21C11.5523 21 12 21.4477 12 22C12 22.5523 11.5523 23 11 23H5C4.44772 23 4 22.5523 4 22C4 21.4477 4.44772 21 5 21H11Z"/>
    </svg>
  )
);

Notebook.displayName = 'Notebook';
export default Notebook;
