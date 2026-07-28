import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PictureInPicture = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M8 20H3C2.44771 20 2 19.5523 2 19V5C2 4.44771 2.44771 4 3 4H21C21.5523 4 22 4.44771 22 5V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H13C12.4477 12 12 12.4477 12 13V19C12 19.5523 12.4477 20 13 20H21C21.5523 20 22 19.5523 22 19V13C22 12.4477 21.5523 12 21 12Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

PictureInPicture.displayName = 'PictureInPicture';
export default PictureInPicture;
