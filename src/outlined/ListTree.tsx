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
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 6L21 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11C4 11.5304 4.21071 12.0391 4.58579 12.4142C4.96086 12.7893 5.46957 13 6 13H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="4.5" cy="6.5" r="2.5" fill="currentColor"/>
    </svg>
  )
);

ListTree.displayName = 'ListTree';
export default ListTree;
