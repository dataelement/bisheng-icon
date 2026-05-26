import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Left = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M14.7929 5.29295C15.1834 4.90243 15.8164 4.90243 16.207 5.29295C16.5975 5.68348 16.5975 6.31649 16.207 6.70702L10.914 12L16.207 17.293C16.5975 17.6835 16.5975 18.3165 16.207 18.707C15.8164 19.0975 15.1834 19.0975 14.7929 18.707L8.79289 12.707C8.40237 12.3165 8.40237 11.6835 8.79289 11.293L14.7929 5.29295Z"/>
    </svg>
  )
);

Left.displayName = 'Left';
export default Left;
