import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Book = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2.5 18.5V5.5C2.5 3.29086 4.29086 1.5 6.5 1.5H17.5C18.0523 1.5 18.5 1.94772 18.5 2.5V15.5C18.5 16.0523 18.0523 16.5 17.5 16.5H6.5C5.40057 16.5 4.5 17.3961 4.5 18.5C4.5 19.0523 4.05228 19.5 3.5 19.5C2.94772 19.5 2.5 19.0523 2.5 18.5ZM4.5 15.0371C5.08923 14.6957 5.77262 14.5 6.5 14.5H16.5V3.5H6.5C5.39543 3.5 4.5 4.39543 4.5 5.5V15.0371Z"/>
<path d="M19.5 3.5C19.5 2.94772 19.9477 2.5 20.5 2.5C21.0523 2.5 21.5 2.94772 21.5 3.5V21.5C21.5 22.0523 21.0523 22.5 20.5 22.5H6.5C4.29086 22.5 2.5 20.7091 2.5 18.5C2.5 16.2909 4.29086 14.5 6.5 14.5H17.5C18.0523 14.5 18.5 14.9477 18.5 15.5C18.5 16.0523 18.0523 16.5 17.5 16.5H6.5C5.39543 16.5 4.5 17.3954 4.5 18.5C4.5 19.6046 5.39543 20.5 6.5 20.5H19.5V3.5Z"/>
<path d="M17 17.5C17.5523 17.5 18 17.9477 18 18.5C18 19.0523 17.5523 19.5 17 19.5H7C6.44772 19.5 6 19.0523 6 18.5C6 17.9477 6.44772 17.5 7 17.5H17Z"/>
    </svg>
  )
);

Book.displayName = 'Book';
export default Book;
