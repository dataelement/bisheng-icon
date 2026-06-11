import { forwardRef } from 'react';
import type { IconProps } from '../types';

const MessagePlus = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12.25 18H10.5L8 20.5L5.5 18H4C2.89543 18 2 17.1046 2 16V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 10.5H12.5013" stroke="currentColor" strokeLinecap="round"/>
<path d="M16.5005 10.5H17.4999" stroke="currentColor" strokeLinecap="round"/>
<path d="M6.50049 10.5H7.49994" stroke="currentColor" strokeLinecap="round"/>
<path d="M16 17.5H22" stroke="currentColor" strokeLinecap="round"/>
<path d="M19 14.5V20.5" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
);

MessagePlus.displayName = 'MessagePlus';
export default MessagePlus;
