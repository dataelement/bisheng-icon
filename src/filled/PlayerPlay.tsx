import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlayerPlay = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18.1771 9.85627C19.7955 10.8273 19.7955 13.1727 18.1771 14.1437L8.03624 20.2283C6.36993 21.228 4.25 20.0278 4.25 18.0845L4.25 5.91547C4.25 3.97224 6.36993 2.77196 8.03624 3.77174L18.1771 9.85627Z"/>
    </svg>
  )
);

PlayerPlay.displayName = 'PlayerPlay';
export default PlayerPlay;
