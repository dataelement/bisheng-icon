import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Tag = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M13 3C13.2652 3 13.5195 3.10543 13.707 3.29297L21.7939 11.3799C22.8792 12.4719 22.8792 14.2351 21.7939 15.3271L21.792 15.3301L15.3389 21.7822C14.8138 22.3079 14.1013 22.6034 13.3584 22.6035C12.6157 22.6035 11.903 22.3084 11.3779 21.7832L3.29297 13.707C3.10544 13.5195 3 13.2652 3 13V4C3 3.44772 3.44772 3 4 3H13ZM5 12.585L12.792 20.3691C12.9421 20.5193 13.1461 20.6035 13.3584 20.6035C13.5705 20.6034 13.7739 20.5191 13.9238 20.3691L20.3779 13.915C20.6855 13.6029 20.6843 13.1012 20.375 12.79L12.5859 5H5V12.585Z"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.25 10.5C9.94035 10.5 10.5 9.94035 10.5 9.25C10.5 8.55965 9.94035 8 9.25 8C8.55965 8 8 8.55965 8 9.25C8 9.94035 8.55965 10.5 9.25 10.5Z"/>
    </svg>
  )
);

Tag.displayName = 'Tag';
export default Tag;
