import { forwardRef } from 'react';
import type { IconProps } from '../types';

const DeviceDesktopExchange = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V10" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M7 20H12" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M9 16V20" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M9 12V8" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M12 12V11" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M15 12V10" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M12 12V11" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M21.5 15H15" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M21.5 15L19.5 13" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M15 18H21.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M15 18L17 20" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

DeviceDesktopExchange.displayName = 'DeviceDesktopExchange';
export default DeviceDesktopExchange;
