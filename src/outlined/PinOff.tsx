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
      <path d="M5.88026 8.96555C5.88026 8.96555 7.83314 10.9184 9.45964 12.5449L3.91382 20.0858L11.4379 14.5232C13.0644 16.1497 15.0341 18.1194 15.0341 18.1194M12.8285 7.14523L16.0164 5.37821L15.6831 3.08582L20.9138 8.31656L18.6266 7.9884L16.8568 11.1736" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.44897 3.03467L21.5511 20.1368" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PinOff.displayName = 'PinOff';
export default PinOff;
