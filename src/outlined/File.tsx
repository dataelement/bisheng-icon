import { forwardRef } from 'react';
import type { IconProps } from '../types';

const File = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M8 13H16M8 17H11.5M7.2 2H14.0748C14.5996 2 14.862 2 15.1068 2.06287C15.3237 2.11858 15.5298 2.21035 15.7163 2.33433C15.9268 2.47422 16.1023 2.66925 16.4534 3.05931L19.1785 6.08727C19.4823 6.42483 19.6343 6.59361 19.7426 6.78594C19.8387 6.95651 19.9092 7.14026 19.9519 7.33132C20 7.54674 20 7.77381 20 8.22795V18.8C20 19.9201 20 20.4802 19.782 20.908C19.5903 21.2843 19.2843 21.5903 18.908 21.782C18.4802 22 17.9201 22 16.8 22H7.2C6.07989 22 5.51984 22 5.09202 21.782C4.71569 21.5903 4.40973 21.2843 4.21799 20.908C4 20.4802 4 19.9201 4 18.8V5.2C4 4.07989 4 3.51984 4.21799 3.09202C4.40973 2.71569 4.71569 2.40973 5.09202 2.21799C5.51984 2 6.07989 2 7.2 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

File.displayName = 'File';
export default File;
