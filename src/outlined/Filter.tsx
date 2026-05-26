import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Filter = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20.9999 3.5C21.3903 3.5 21.7449 3.72736 21.9081 4.08203C22.0713 4.43666 22.0135 4.85383 21.7597 5.15039L14.7997 13.2783V21C14.7997 21.3457 14.6216 21.6671 14.328 21.8496C14.0344 22.0321 13.6673 22.0495 13.3573 21.8965L9.75674 20.1191C9.41576 19.9507 9.20026 19.603 9.2001 19.2227V13.2783L2.24013 5.15039C1.98627 4.85383 1.92849 4.43666 2.0917 4.08203C2.25494 3.72736 2.60946 3.5 2.9999 3.5H20.9999ZM10.9599 12.2588C11.1148 12.4399 11.2001 12.6708 11.2001 12.9092V18.6006L12.7997 19.3906V12.9092C12.7997 12.6708 12.885 12.4399 13.0399 12.2588L18.827 5.5H5.17275L10.9599 12.2588Z"/>
    </svg>
  )
);

Filter.displayName = 'Filter';
export default Filter;
