import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FilePdf = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3 21V3C3 1.89543 3.89543 1 5 1H15C15.2652 1 15.5195 1.10543 15.707 1.29297L20.707 6.29297C20.8946 6.4805 21 6.73478 21 7V21C21 22.1046 20.1046 23 19 23H5C3.89544 23 3 22.1046 3 21ZM5 21H19V7.41406L14.5859 3H5V21Z"/>
<path d="M15 8C15.5523 8 16 8.44772 16 9V12.9961C15.9999 13.5479 15.5528 13.9956 15.001 13.9961L9.00488 14C8.45273 14.0004 8.00448 13.5531 8.00391 13.001L8 9.00098C7.99974 8.7356 8.10542 8.48072 8.29297 8.29297C8.4805 8.10544 8.73478 8 9 8H15ZM10.0029 11.999L14 11.9961V10H10.001L10.0029 11.999Z"/>
<path d="M8 17V9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17Z"/>
    </svg>
  )
);

FilePdf.displayName = 'FilePdf';
export default FilePdf;
