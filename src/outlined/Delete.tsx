import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Delete = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M15.9004 1.5L15.9902 1.50391C16.4377 1.54413 16.8086 1.8809 16.8857 2.33105L17.4854 5.83105L15.5146 6.16895L15.0566 3.5H8.94336L8.48535 6.16895L6.51465 5.83105L7.11426 2.33105L7.13379 2.24219C7.24922 1.80839 7.64327 1.50018 8.09961 1.5H15.9004Z"/>
<path d="M21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z"/>
<path d="M18.5 5C18.7764 5 19.0404 5.11477 19.2295 5.31641C19.4184 5.51802 19.5158 5.78871 19.498 6.06445L18.498 21.5645C18.4641 22.0906 18.0273 22.5 17.5 22.5H6.5C5.97273 22.5 5.53593 22.0906 5.50195 21.5645L4.50195 6.06445C4.48416 5.78871 4.58158 5.51802 4.77051 5.31641C4.95955 5.11477 5.2236 5 5.5 5H18.5ZM7.4375 20.5H16.5625L17.4336 7H6.56641L7.4375 20.5Z"/>
<path d="M14.5 16.5C15.0523 16.5 15.5 16.9477 15.5 17.5C15.5 18.0523 15.0523 18.5 14.5 18.5H9.5C8.94772 18.5 8.5 18.0523 8.5 17.5C8.5 16.9477 8.94772 16.5 9.5 16.5H14.5Z"/>
    </svg>
  )
);

Delete.displayName = 'Delete';
export default Delete;
