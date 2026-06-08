import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PeopleRound = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 8C13.3807 8 14.5 6.8807 14.5 5.5C14.5 4.11929 13.3807 3 12 3C10.6193 3 9.5 4.11929 9.5 5.5C9.5 6.8807 10.6193 8 12 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 11H10.5C10.0357 11 9.8035 11 9.60795 11.0192C7.7088 11.2063 6.2063 12.7088 6.01925 14.608C6 14.8035 6 15.0357 6 15.5H18C18 15.0357 18 14.8035 17.9807 14.608C17.7937 12.7088 16.2912 11.2063 14.392 11.0192C14.1965 11 13.9643 11 13.5 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 14.3918C21.4509 15.0039 22 15.7263 22 16.5C22 18.7091 17.5229 20.5 12 20.5C6.47715 20.5 2 18.7091 2 16.5C2 15.7263 2.54914 15.0039 3.5 14.3918" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 18L12 20.5L9.5 23" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PeopleRound.displayName = 'PeopleRound';
export default PeopleRound;
