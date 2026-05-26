import { forwardRef } from 'react';
import type { IconProps } from '../types';

const History = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330058_23)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M2.90918 3.36365V7H6.54556" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C8.299 2 5.06755 4.01056 3.33839 6.99905" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0026 6L12.002 12.0044L16.2417 16.2441" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330058_23">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

History.displayName = 'History';
export default History;
