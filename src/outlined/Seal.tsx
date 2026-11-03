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
      <path d="M9.50355 13.5213C8.15398 13.5213 6.47511 13.5213 5.00015 13.5213C4.44784 13.5213 4.00019 13.968 4.00021 14.5203C4.00024 15.2519 4.00025 16.2447 4.00019 16.9997C4.00015 17.5522 4.44807 18 5.00058 18H19.0001C19.5524 18 20.0001 17.5526 20.0001 17.0003C20.0001 16.2452 20.0001 15.252 20.0001 14.5202C20.0001 13.9679 19.5537 13.5213 19.0014 13.5213C17.7526 13.5213 15.6429 13.5213 14.5206 13.5213C14.1303 13.5213 14.1304 13.3882 14.1304 12.1396C14.1304 10.8909 16.5683 10.3471 16.5683 6.9264C16.5683 3.50576 14.27 2.5 12.16 2.5C10.0499 2.5 7.51105 3.50576 7.51105 6.9264C7.51105 10.3471 9.96185 11.1666 9.96185 12.1396C9.96185 13.1126 9.9643 13.5213 9.50355 13.5213Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M4 21H20" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

Seal.displayName = 'Seal';
export default Seal;
