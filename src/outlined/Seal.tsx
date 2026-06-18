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
      <path d="M5.00058 18C4.44807 18 4.00015 17.5522 4.00019 16.9997C4.00025 16.2447 4.00024 15.2519 4.00021 14.5203C4.00019 13.968 4.44784 13.5213 5.00015 13.5213C6.47511 13.5213 8.15398 13.5213 9.50355 13.5213C9.9643 13.5213 9.96185 13.1126 9.96185 12.1396C9.96185 11.1666 7.51105 10.3471 7.51105 6.9264C7.51105 3.50576 10.0499 2.5 12.16 2.5C14.27 2.5 16.5683 3.50576 16.5683 6.9264C16.5683 10.3471 14.1304 10.8909 14.1304 12.1396C14.1304 13.3882 14.1303 13.5213 14.5206 13.5213C15.6429 13.5213 17.7526 13.5213 19.0014 13.5213C19.5537 13.5213 20.0001 13.9679 20.0001 14.5202C20.0001 15.252 20.0001 16.2452 20.0001 17.0003C20.0001 17.5526 19.5524 18 19.0001 18H5.00058Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M4 21H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Seal.displayName = 'Seal';
export default Seal;
