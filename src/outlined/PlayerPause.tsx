import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlayerPause = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 1.71429, ...props }, ref) => (
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
      <path d="M5.77157 3.2807H8.26296C8.95094 3.2807 9.50866 3.83842 9.50866 4.5264V19.4747C9.50866 20.1627 8.95094 20.7204 8.26296 20.7204H5.77157C5.0836 20.7204 4.52588 20.1627 4.52588 19.4747V4.5264C4.52588 3.83842 5.0836 3.2807 5.77157 3.2807Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M15.7359 3.2807H18.2273C18.9153 3.2807 19.473 3.83842 19.473 4.5264V19.4747C19.473 20.1627 18.9153 20.7204 18.2273 20.7204H15.7359C15.048 20.7204 14.4902 20.1627 14.4902 19.4747V4.5264C14.4902 3.83842 15.048 3.2807 15.7359 3.2807Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

PlayerPause.displayName = 'PlayerPause';
export default PlayerPause;
