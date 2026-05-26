import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Search = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18 10.5C18 6.35788 14.6421 3 10.5 3C6.35788 3 3 6.35788 3 10.5C3 14.6421 6.35788 18 10.5 18C14.6421 18 18 14.6421 18 10.5ZM20 10.5C20 15.7467 15.7467 20 10.5 20C5.25332 20 1 15.7467 1 10.5C1 5.25332 5.25332 1 10.5 1C15.7467 1 20 5.25332 20 10.5Z"/>
<path d="M15.9039 15.9039C16.2944 15.5133 16.9274 15.5133 17.3179 15.9039L21.5611 20.1461C21.9516 20.5366 21.9516 21.1706 21.5611 21.5611C21.1706 21.9516 20.5366 21.9516 20.1461 21.5611L15.9039 17.3179C15.5133 16.9274 15.5133 16.2944 15.9039 15.9039Z"/>
    </svg>
  )
);

Search.displayName = 'Search';
export default Search;
