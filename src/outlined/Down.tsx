import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Down = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M17.7929 8.29295C18.1834 7.90243 18.8164 7.90243 19.207 8.29295C19.5975 8.68348 19.5975 9.31649 19.207 9.70702L13.207 15.707C12.8164 16.0975 12.1834 16.0975 11.7929 15.707L5.79289 9.70702C5.40237 9.31649 5.40237 8.68348 5.79289 8.29295C6.18342 7.90243 6.81643 7.90243 7.20696 8.29295L12.4999 13.5859L17.7929 8.29295Z"/>
    </svg>
  )
);

Down.displayName = 'Down';
export default Down;
