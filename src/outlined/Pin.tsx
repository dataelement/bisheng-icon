import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Pin = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M5.88051 8.87973C7.10034 7.65985 8.54996 7.6936 10.1256 8.55767L16.0167 5.2924L15.6833 3L20.9141 8.23075L18.6269 7.90258L15.3564 13.7885C16.1809 15.4702 16.2542 16.8137 15.0344 18.0336C15.0344 18.0336 13.0647 16.0639 11.4382 14.4374L3.91406 20L9.45989 12.4591C7.83338 10.8326 5.88051 8.87973 5.88051 8.87973Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

Pin.displayName = 'Pin';
export default Pin;
