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
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11.25 18H9.5L7 20.5L4.5 18H2V3H22V11.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 10.5H12.5013" strokeWidth="2" strokeLinecap="round"/>
<path d="M16.5005 10.5H17.4999" strokeWidth="2" strokeLinecap="round"/>
<path d="M6.50049 10.5H7.49994" strokeWidth="2" strokeLinecap="round"/>
<path d="M16 17.5H22" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 14.5V20.5" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

MessagePlus.displayName = 'MessagePlus';
export default MessagePlus;
