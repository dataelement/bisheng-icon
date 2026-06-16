import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Seal = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M4 18L4.00231 14.0213C4.00276 13.7453 4.22656 13.5216 4.50259 13.5213C6.16955 13.5213 7.83655 13.5213 9.50355 13.5213C9.9643 13.5213 9.96185 13.1126 9.96185 12.1396C9.96185 11.1666 7.51105 10.3471 7.51105 6.9264C7.51105 3.50576 10.0499 2.5 12.16 2.5C14.27 2.5 16.5683 3.50576 16.5683 6.9264C16.5683 10.3471 14.1304 10.8909 14.1304 12.1396C14.1304 13.3882 14.1303 13.5213 14.5206 13.5213C16.1804 13.5213 17.8403 13.5213 19.5002 13.5213C19.7763 13.5213 20.0002 13.7452 20.0002 14.0213V18H4Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M4 21H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Seal.displayName = 'Seal';
export default Seal;
