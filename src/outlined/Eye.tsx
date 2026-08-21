import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Eye = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330570_388)">
<path d="M9.83398 11.9999C9.83398 12.5744 10.0622 13.1253 10.4684 13.5315C10.8746 13.9377 11.4255 14.1659 11.9999 14.1659C12.5744 14.1659 13.1253 13.9377 13.5315 13.5315C13.9377 13.1253 14.1659 12.5744 14.1659 11.9999C14.1659 11.4255 13.9377 10.8746 13.5315 10.4684C13.1253 10.0622 12.5744 9.83398 11.9999 9.83398C11.4255 9.83398 10.8746 10.0622 10.4684 10.4684C10.0622 10.8746 9.83398 11.4255 9.83398 11.9999Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.4619 11.9749C19.6619 16.6415 16.1619 18.9749 11.9619 18.9749C7.76191 18.9749 4.26191 16.6415 1.46191 11.9749C4.26191 7.30819 7.76191 4.97485 11.9619 4.97485C16.1619 4.97485 19.6619 7.30819 22.4619 11.9749Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330570_388">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Eye.displayName = 'Eye';
export default Eye;
