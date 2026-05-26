import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Share = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M14 3H21V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14.7368V19.5C21 20.3285 20.3285 21 19.5 21H4.5C3.67158 21 3 20.3285 3 19.5V4.5C3 3.67158 3.67158 3 4.5 3H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.8999 11.1L20.5499 3.44995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Share.displayName = 'Share';
export default Share;
