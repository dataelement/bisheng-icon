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
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V3Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M8 2V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 2H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 22H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Notebook.displayName = 'Notebook';
export default Notebook;
