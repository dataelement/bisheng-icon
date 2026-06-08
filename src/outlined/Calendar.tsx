import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Calendar = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2.5 9.5H21.5V20C21.5 20.5523 21.0523 21 20.5 21H3.5C2.94771 21 2.5 20.5523 2.5 20V9.5Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M2.5 4.5C2.5 3.94771 2.94771 3.5 3.5 3.5H20.5C21.0523 3.5 21.5 3.94771 21.5 4.5V9.5H2.5V4.5Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17H17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13H17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Calendar.displayName = 'Calendar';
export default Calendar;
