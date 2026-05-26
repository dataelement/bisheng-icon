import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileAddition = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3 21V3C3 1.89543 3.89543 1 5 1H15.5C15.7835 1 16.0535 1.12037 16.2432 1.33105L20.7432 6.33105C20.9084 6.51468 21 6.75296 21 7V11.5C21 12.0523 20.5523 12.5 20 12.5C19.4477 12.5 19 12.0523 19 11.5V7.38281L15.0547 3H5V21H11C11.5523 21 12 21.4477 12 22C12 22.5523 11.5523 23 11 23H5C3.89544 23 3 22.1046 3 21Z"/>
<path d="M15.5 21.5V14.5C15.5 13.9477 15.9477 13.5 16.5 13.5C17.0523 13.5 17.5 13.9477 17.5 14.5V21.5C17.5 22.0523 17.0523 22.5 16.5 22.5C15.9477 22.5 15.5 22.0523 15.5 21.5Z"/>
<path d="M20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H13C12.4477 19 12 18.5523 12 18C12 17.4477 12.4477 17 13 17H20Z"/>
<path d="M14 2C14 1.44772 14.4477 1 15 1C15.5523 1 16 1.44772 16 2V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H15C14.4477 8 14 7.55228 14 7V2Z"/>
    </svg>
  )
);

FileAddition.displayName = 'FileAddition';
export default FileAddition;
