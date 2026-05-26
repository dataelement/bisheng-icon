import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowRightCircle = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"/>
<path d="M16.2458 11.25C16.7981 11.25 17.2458 11.6977 17.2458 12.25C17.2458 12.8023 16.7981 13.25 16.2458 13.25H7.24585C6.69357 13.25 6.24585 12.8023 6.24585 12.25C6.24585 11.6977 6.69357 11.25 7.24585 11.25H16.2458Z"/>
<path d="M11.0388 7.04297C11.4293 6.65244 12.0624 6.65244 12.4529 7.04297L16.9529 11.543C17.3434 11.9335 17.3434 12.5665 16.9529 12.957L12.4529 17.457C12.0624 17.8476 11.4293 17.8476 11.0388 17.457C10.6483 17.0665 10.6483 16.4335 11.0388 16.043L14.8318 12.25L11.0388 8.45703C10.6483 8.06651 10.6483 7.43349 11.0388 7.04297Z"/>
    </svg>
  )
);

ArrowRightCircle.displayName = 'ArrowRightCircle';
export default ArrowRightCircle;
