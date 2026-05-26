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
      <g clipPath="url(#clip0_330044_101470)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M4 3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V3Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M8 2V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6H16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10H16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 2H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 22H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330044_101470">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

Notebook.displayName = 'Notebook';
export default Notebook;
