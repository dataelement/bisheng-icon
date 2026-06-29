import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileImage = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M4 18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.07989 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V8.22795C20 7.77381 20 7.54674 19.9519 7.33132C19.9092 7.14026 19.8387 6.95651 19.7426 6.78594C19.6343 6.59361 19.4823 6.42483 19.1785 6.08727L16.4534 3.05931C16.1023 2.66925 15.9268 2.47422 15.7163 2.33433C15.5298 2.21035 15.3237 2.11858 15.1068 2.06287C14.862 2 14.5996 2 14.0748 2H7.2C6.07989 2 5.51984 2 5.09202 2.21799C4.71569 2.40973 4.40973 2.71569 4.21799 3.09202C4 3.51984 4 4.07989 4 5.2V18.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14C10.6046 14 11.5 13.1046 11.5 12C11.5 10.8954 10.6046 10 9.5 10C8.39543 10 7.5 10.8954 7.5 12C7.5 13.1046 8.39543 14 9.5 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 20L15.6087 13L13 19L9.30435 17.0909L6 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileImage.displayName = 'FileImage';
export default FileImage;
