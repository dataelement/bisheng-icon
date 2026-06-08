import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Write = forwardRef<SVGSVGElement, IconProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 12V9.5L19.5 2L22 4.5L14.5 12H12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H4.5C3.11929 12 2 13.1193 2 14.5C2 15.8807 3.11929 17 4.5 17H19.5C20.8807 17 22 18.1193 22 19.5C22 20.8807 20.8807 22 19.5 22H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Write.displayName = 'Write';
export default Write;
