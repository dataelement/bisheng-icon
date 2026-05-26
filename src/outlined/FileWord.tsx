import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileWord = forwardRef<SVGSVGElement, IconProps>(
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
<path d="M15.0266 9.79005C15.1425 9.2503 15.6742 8.90679 16.2141 9.02248C16.7538 9.1384 17.0973 9.67011 16.9816 10.21L15.4816 17.21C15.3925 17.625 15.0512 17.9387 14.6301 17.9922C14.2088 18.0457 13.7995 17.8271 13.6096 17.4473L12.0041 14.2363L10.3986 17.4473C10.2087 17.8271 9.79943 18.0457 9.37813 17.9922C8.95699 17.9387 8.6157 17.625 8.52657 17.21L7.02657 10.21C6.91088 9.67011 7.25439 9.1384 7.79414 9.02248C8.33401 8.90679 8.86572 9.2503 8.98164 9.79005L9.88399 14.0029L11.1096 11.5527C11.279 11.214 11.6253 11 12.0041 11C12.3829 11 12.7292 11.214 12.8986 11.5527L14.1232 14.0029L15.0266 9.79005Z"/>
    </svg>
  )
);

FileWord.displayName = 'FileWord';
export default FileWord;
