import { forwardRef } from 'react';
import type { IconProps } from '../types';

const LogOut = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M16 17L21 12L16 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3L10 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LogOut.displayName = 'LogOut';
export default LogOut;
