import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Layer = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2 5.95715L12 9.5L22 5.95715L12 2.5L2 5.95715Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M2 12L12 15.5L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 18L12 21.5L22 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Layer.displayName = 'Layer';
export default Layer;
