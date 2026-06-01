import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PinOff = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M5.34806 8.75212C5.34806 8.75212 7.46001 10.8641 9.21901 12.6231L3.22144 20.7782L11.3585 14.7625C13.1174 16.5215 15.2476 18.6516 15.2476 18.6516M12.8622 6.78352L16.3099 4.87256L15.9494 2.39343L21.6062 8.05027L19.1327 7.69537L17.2187 11.14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.44897 3.03467L21.5511 20.1368" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PinOff.displayName = 'PinOff';
export default PinOff;
