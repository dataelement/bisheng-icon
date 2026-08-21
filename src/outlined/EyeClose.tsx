import { forwardRef } from 'react';
import type { IconProps } from '../types';

const EyeClose = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330570_395)">
<path d="M10.4676 10.4697C10.0615 10.876 9.83339 11.427 9.8335 12.0014C9.8336 12.5759 10.0619 13.1268 10.4682 13.5329C10.8744 13.939 11.4254 14.1671 11.9999 14.167C12.5743 14.1669 13.1252 13.9386 13.5313 13.5324" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.4233 17.4265C15.7868 18.4504 13.8926 18.9874 11.9622 18.9746C7.76229 18.9746 4.26235 16.6413 1.4624 11.9748C2.94638 9.50147 4.62634 7.68384 6.50231 6.52186M9.83892 5.18488C10.5378 5.04341 11.2492 4.97305 11.9622 4.97489C16.1621 4.97489 19.6621 7.30818 22.462 11.9748C21.685 13.2697 20.8532 14.3862 19.9677 15.323" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330570_395">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

EyeClose.displayName = 'EyeClose';
export default EyeClose;
