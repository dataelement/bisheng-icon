import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ViewOnNewTab = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21.0166 19.0166C21.0166 20.1212 20.1212 21.0166 19.0166 21.0166H4.9834C3.87883 21.0166 2.9834 20.1212 2.9834 19.0166V4.9834C2.9834 3.87883 3.87883 2.9834 4.9834 2.9834H19.0166C20.1212 2.9834 21.0166 3.87883 21.0166 4.9834V19.0166Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M8.55446 21.0166V17.4455C8.55446 16.341 7.65903 15.4455 6.55446 15.4455H2.9834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13V7H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7L11 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ViewOnNewTab.displayName = 'ViewOnNewTab';
export default ViewOnNewTab;
