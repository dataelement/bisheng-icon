import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Microphone = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M11.9999 1.96326C14.025 1.96326 15.6666 3.60488 15.6666 5.62992V11.1299C15.6666 13.155 14.025 14.7966 11.9999 14.7966C9.97487 14.7966 8.33325 13.155 8.33325 11.1299V5.62992C8.33325 3.60488 9.97487 1.96326 11.9999 1.96326Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M5 10.5C5 14.7753 7.60653 18.2975 12.0351 18.2975C16.4636 18.2975 19 14.7753 19 10.5" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M12 18.2975L12 22" stroke="currentColor"/>
<path d="M8 22H16" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

Microphone.displayName = 'Microphone';
export default Microphone;
