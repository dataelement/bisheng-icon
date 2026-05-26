import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ListTree = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H12C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5H21Z"/>
<path d="M21 12C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H12C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12H21Z"/>
<path d="M21 19C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H12C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19H21Z"/>
<path d="M3 11C3 10.4477 3.44772 10 4 10C4.55228 10 5 10.4477 5 11C5 11.2652 5.10543 11.5195 5.29297 11.707C5.48051 11.8946 5.73478 12 6 12H8C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14H6C5.20435 14 4.44152 13.6837 3.87891 13.1211C3.3163 12.5585 3 11.7956 3 11Z"/>
<path d="M3 18V6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6V18C5 18.2652 5.10543 18.5195 5.29297 18.707C5.48051 18.8946 5.73478 19 6 19H8C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21H6C5.20435 21 4.44152 20.6837 3.87891 20.1211C3.3163 19.5585 3 18.7956 3 18Z"/>
<path d="M7 6.5C7 7.88071 5.88071 9 4.5 9C3.11929 9 2 7.88071 2 6.5C2 5.11929 3.11929 4 4.5 4C5.88071 4 7 5.11929 7 6.5Z"/>
    </svg>
  )
);

ListTree.displayName = 'ListTree';
export default ListTree;
