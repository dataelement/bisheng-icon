import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileQuestion = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3 21V3C3 1.89543 3.89543 1 5 1H15.5C15.7835 1 16.0535 1.12037 16.2432 1.33105L20.7432 6.33105C20.9084 6.51468 21 6.75296 21 7V21C21 22.1046 20.1046 23 19 23H5C3.89544 23 3 22.1046 3 21ZM5 21H19V7.38281L15.0547 3H5V21Z"/>
<path d="M11 15.5V14C11 13.4477 11.4477 13 12 13C12.4448 13 13 12.5543 13 11.75C13 10.9457 12.4448 10.5 12 10.5C11.5552 10.5 11 10.9457 11 11.75C11 12.3023 10.5523 12.75 10 12.75C9.44772 12.75 9 12.3023 9 11.75C9 10.069 10.2357 8.5 12 8.5C13.7643 8.5 15 10.069 15 11.75C15 13.0907 14.2133 14.3583 13 14.8174V15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5Z"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 19.5C12.6904 19.5 13.25 18.9404 13.25 18.25C13.25 17.5597 12.6904 17 12 17C11.3097 17 10.75 17.5597 10.75 18.25C10.75 18.9404 11.3097 19.5 12 19.5Z"/>
<path d="M14 2C14 1.44772 14.4477 1 15 1C15.5523 1 16 1.44772 16 2V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H15C14.4477 8 14 7.55228 14 7V2Z"/>
    </svg>
  )
);

FileQuestion.displayName = 'FileQuestion';
export default FileQuestion;
