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
      <path d="M5.34806 8.75212C6.66726 7.43287 8.23496 7.46937 9.93896 8.40382L16.3099 4.87256L15.9494 2.39343L21.6062 8.05027L19.1327 7.69537L15.5958 14.0607C16.4875 15.8795 16.5668 17.3324 15.2476 18.6516C15.2476 18.6516 13.1174 16.5215 11.3585 14.7625L3.22144 20.7782L9.21901 12.6231C7.46001 10.8641 5.34806 8.75212 5.34806 8.75212Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

Pin.displayName = 'Pin';
export default Pin;
