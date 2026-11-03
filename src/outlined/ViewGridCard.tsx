import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ViewGridCard = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3.99927 4.00024H9.99927V10.0002H3.99927V4.00024Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M13.9993 4.00024H19.9993V10.0002H13.9993V4.00024Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M3.99927 14.0002H9.99927V20.0002H3.99927V14.0002Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M13.9993 14.0002H19.9993V20.0002H13.9993V14.0002Z" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

ViewGridCard.displayName = 'ViewGridCard';
export default ViewGridCard;
