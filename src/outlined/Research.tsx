import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Research = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M13.3285 7.17155C12.6046 6.4477 11.6046 6 10.5 6C9.39548 6 8.39548 6.4477 7.67163 7.17155" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6108 16.6108L20.8535 20.8535" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Research.displayName = 'Research';
export default Research;
