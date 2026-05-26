import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileSearch = forwardRef<SVGSVGElement, IconProps>(
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
<path d="M13 13C13 11.8954 12.1046 11 11 11C9.89543 11 9 11.8954 9 13C9 14.1046 9.89543 15 11 15C12.1046 15 13 14.1046 13 13ZM15 13C15 15.2091 13.2091 17 11 17C8.79086 17 7 15.2091 7 13C7 10.7909 8.79086 9 11 9C13.2091 9 15 10.7909 15 13Z"/>
<path d="M12.7188 14.375C13.0638 13.9437 13.6937 13.8737 14.125 14.2188L16.625 16.2188C17.0563 16.5638 17.1263 17.1937 16.7812 17.625C16.4362 18.0563 15.8063 18.1263 15.375 17.7812L12.875 15.7812C12.4437 15.4362 12.3737 14.8063 12.7188 14.375Z"/>
<path d="M14 2C14 1.44772 14.4477 1 15 1C15.5523 1 16 1.44772 16 2V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H15C14.4477 8 14 7.55228 14 7V2Z"/>
    </svg>
  )
);

FileSearch.displayName = 'FileSearch';
export default FileSearch;
