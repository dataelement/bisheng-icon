import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileEditing = forwardRef<SVGSVGElement, IconProps>(
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
<path d="M12.8691 9.72461C13.2619 9.40426 13.8409 9.42685 14.207 9.79297L16.207 11.793C16.5976 12.1835 16.5976 12.8165 16.207 13.207L11.207 18.207C11.0195 18.3946 10.7652 18.5 10.5 18.5H8.5C7.94772 18.5 7.5 18.0523 7.5 17.5V15.5C7.5 15.2348 7.60543 14.9805 7.79297 14.793L12.793 9.79297L12.8691 9.72461ZM9.5 15.9141V16.5H10.0859L14.0859 12.5L13.5 11.9141L9.5 15.9141Z"/>
    </svg>
  )
);

FileEditing.displayName = 'FileEditing';
export default FileEditing;
