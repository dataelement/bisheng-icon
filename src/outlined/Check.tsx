import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Check = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M20.795 4.79106C21.1865 4.40173 21.8195 4.40359 22.209 4.79496C22.5984 5.18644 22.5965 5.81953 22.2051 6.20903L9.14264 19.209C8.75257 19.597 8.12255 19.597 7.73248 19.209L1.79498 13.2998C1.4036 12.9103 1.40171 12.2773 1.79108 11.8858C2.18057 11.4944 2.81366 11.4926 3.20514 11.8819L8.43756 17.0889L20.795 4.79106Z"/>
    </svg>
  )
);

Check.displayName = 'Check';
export default Check;
