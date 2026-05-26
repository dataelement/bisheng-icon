import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileExport = forwardRef<SVGSVGElement, IconProps>(
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
<path d="M19.207 15.793C18.8165 15.4024 18.1835 15.4024 17.793 15.793C17.4024 16.1835 17.4024 16.8165 17.793 17.207L19.5859 19L17.793 20.793C17.4024 21.1835 17.4024 21.8165 17.793 22.207C18.1835 22.5976 18.8165 22.5976 19.207 22.207L21.707 19.707C22.0976 19.3165 22.0976 18.6835 21.707 18.293L19.207 15.793Z"/>
<path d="M14 15C14 14.4477 13.5523 14 13 14C12.4477 14 12 14.4477 12 15V19C12 19.5523 12.4477 20 13 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H14V15Z"/>
<path d="M14 2C14 1.44772 14.4477 1 15 1C15.5523 1 16 1.44772 16 2V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H15C14.4477 8 14 7.55228 14 7V2Z"/>
    </svg>
  )
);

FileExport.displayName = 'FileExport';
export default FileExport;
