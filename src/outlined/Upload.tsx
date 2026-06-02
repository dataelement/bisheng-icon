import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Upload = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M17 8L12 3L7 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3L12 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Upload.displayName = 'Upload';
export default Upload;
