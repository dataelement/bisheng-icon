import { forwardRef } from 'react';
import type { IconProps } from '../types';

const CloseCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM15.5361 8.46484C15.1457 8.0744 14.5126 8.07456 14.1221 8.46484L12 10.5859L9.87891 8.46484C9.4884 8.07434 8.85537 8.07437 8.46484 8.46484C8.07439 8.85537 8.07434 9.48841 8.46484 9.87891L10.5859 12L8.46484 14.1221C8.07455 14.5126 8.0744 15.1457 8.46484 15.5361C8.85534 15.926 9.48856 15.9262 9.87891 15.5361L12 13.4141L14.1221 15.5361C14.5126 15.9259 15.1458 15.9264 15.5361 15.5361C15.9264 15.1458 15.9259 14.5126 15.5361 14.1221L13.4141 12L15.5361 9.87891C15.9262 9.48856 15.926 8.85534 15.5361 8.46484Z"/>
    </svg>
  )
);

CloseCircle.displayName = 'CloseCircle';
export default CloseCircle;
