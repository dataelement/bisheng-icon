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
      <path d="M14.1567 3.37292H20.627V9.84323" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.6272 14.6234V19.1892C20.6272 19.9834 19.9835 20.6271 19.1894 20.6271H4.81089C4.01679 20.6271 3.37305 19.9834 3.37305 19.1892V4.81077C3.37305 4.01667 4.01679 3.37292 4.81089 3.37292H9.12443" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0784 10.9216L20.6271 3.37292" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Share.displayName = 'Share';
export default Share;
