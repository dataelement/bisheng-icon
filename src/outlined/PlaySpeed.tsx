import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlaySpeed = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 4"/>
<path d="M9.6377 12V9.57165C9.6377 8.80185 10.471 8.32072 11.1377 8.70562L13.2407 9.91981L15.3437 11.134C16.0104 11.5189 16.0104 12.4811 15.3437 12.866L13.2407 14.0802L11.1377 15.2944C10.471 15.6793 9.6377 15.1982 9.6377 14.4284V12Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

PlaySpeed.displayName = 'PlaySpeed';
export default PlaySpeed;
