import { forwardRef } from 'react';
import type { IconProps } from '../types';

const RightTriangle = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M9.61719 5.07614C9.99086 4.92136 10.421 5.00694 10.707 5.29294L16.707 11.2929C17.0976 11.6835 17.0976 12.3165 16.707 12.707L10.707 18.707C10.421 18.993 9.99086 19.0786 9.61719 18.9238C9.24359 18.769 9 18.4044 9 18V5.99997C9 5.59556 9.24359 5.23095 9.61719 5.07614ZM11 15.5859L14.5859 12L11 8.41403V15.5859Z"/>
    </svg>
  )
);

RightTriangle.displayName = 'RightTriangle';
export default RightTriangle;
