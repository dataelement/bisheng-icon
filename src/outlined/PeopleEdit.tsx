import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PeopleEdit = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 9C13.933 9 15.5 7.433 15.5 5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5C8.5 7.433 10.067 9 12 9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 21L20.5 16L18.5 14L13.5 19V21H15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21C3 19.6008 3.32625 18.2208 3.95283 16.9697C4.57942 15.7186 5.48908 14.6309 6.60958 13.7928C7.73008 12.9548 9.03055 12.3895 10.4077 12.142C11.7849 11.8944 13.2008 11.9714 14.543 12.3667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PeopleEdit.displayName = 'PeopleEdit';
export default PeopleEdit;
