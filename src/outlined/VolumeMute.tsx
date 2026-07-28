import { forwardRef } from 'react';
import type { IconProps } from '../types';

const VolumeMute = forwardRef<SVGSVGElement, IconProps>(
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
      <path opacity="0.01" d="M21.5 9H15V15.5H21.5V9Z" fill="currentColor"/>
<mask id="mask0_330492_1472" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="15" y="9" width="7" height="7">
<path d="M21.5 9H15V15.5H21.5V9Z" fill="currentColor"/>
</mask>
<g mask="url(#mask0_330492_1472)">
<path d="M20.3674 10.1429L16.1248 14.3855" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1248 10.1429L20.3674 14.3855" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M12 3V21C8.5 21 5.89925 16.4195 5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925C5.89925 7.5054 8.5 3 12 3Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

VolumeMute.displayName = 'VolumeMute';
export default VolumeMute;
