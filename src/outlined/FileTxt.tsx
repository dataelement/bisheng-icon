import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileTxt = forwardRef<SVGSVGElement, IconProps>(
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
<path d="M15 8.00415C15.5523 8.00415 16 8.45187 16 9.00415C16 9.55644 15.5523 10.0042 15 10.0042H9C8.44772 10.0042 8 9.55644 8 9.00415C8 8.45187 8.44772 8.00415 9 8.00415H15Z"/>
<path d="M11.0042 17.0002V9.00415C11.0042 8.45187 11.4519 8.00415 12.0042 8.00415C12.5564 8.00415 13.0042 8.45187 13.0042 9.00415V17.0002C13.004 17.5524 12.5564 18.0002 12.0042 18.0002C11.4519 18.0002 11.0043 17.5524 11.0042 17.0002Z"/>
    </svg>
  )
);

FileTxt.displayName = 'FileTxt';
export default FileTxt;
