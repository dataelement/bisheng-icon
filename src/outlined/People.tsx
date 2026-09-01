import { forwardRef } from 'react';
import type { IconProps } from '../types';

const People = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21 21.5C21 20.3181 20.7672 19.1478 20.3149 18.0558C19.8626 16.9639 19.1997 15.9718 18.364 15.136C17.5282 14.3003 16.5361 13.6374 15.4442 13.1851C14.3522 12.7328 13.1819 12.5 12 12.5C10.8181 12.5 9.64778 12.7328 8.55585 13.1851C7.46392 13.6374 6.47177 14.3003 5.63604 15.136C4.80031 15.9718 4.13738 16.9639 3.68508 18.0558C3.23279 19.1478 3 20.3181 3 21.5M15.5 6C15.5 7.933 13.933 9.5 12 9.5C10.067 9.5 8.5 7.933 8.5 6C8.5 4.067 10.067 2.5 12 2.5C13.933 2.5 15.5 4.067 15.5 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

People.displayName = 'People';
export default People;
