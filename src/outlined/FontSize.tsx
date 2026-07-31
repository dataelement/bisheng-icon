import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FontSize = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12.4426 19.6093L15.5801 10.5432C15.6659 10.2951 15.8269 10.08 16.0406 9.92771C16.2544 9.77543 16.5103 9.6936 16.7728 9.6936C17.0352 9.6936 17.2912 9.77543 17.5049 9.92771C17.7187 10.08 17.8797 10.2951 17.9654 10.5432L21.1029 19.6093" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3049 17.135H20.2406" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.89722 19.2369L9.08397 4.8474C9.14215 4.71213 9.24031 4.59657 9.36611 4.51528C9.49191 4.434 9.6397 4.39062 9.79088 4.39062C9.94206 4.39062 10.0899 4.434 10.2156 4.51528C10.3414 4.59657 10.4396 4.71213 10.4978 4.8474L12.8089 10.2241" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.01831 14.9968H10.3215" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FontSize.displayName = 'FontSize';
export default FontSize;
