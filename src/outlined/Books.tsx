import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Books = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3.19043 4.28946C3.19043 3.99733 3.30648 3.71717 3.51304 3.5106C3.71961 3.30404 3.99977 3.18799 4.2919 3.18799H6.49485C6.78697 3.18799 7.06714 3.30404 7.2737 3.5106C7.48027 3.71717 7.59632 3.99733 7.59632 4.28946V19.7101C7.59632 20.0022 7.48027 20.2824 7.2737 20.4889C7.06714 20.6955 6.78697 20.8115 6.49485 20.8115H4.2919C3.99977 20.8115 3.71961 20.6955 3.51304 20.4889C3.30648 20.2824 3.19043 20.0022 3.19043 19.7101V4.28946Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.59521 4.28946C7.59521 3.99733 7.71126 3.71717 7.91783 3.5106C8.12439 3.30404 8.40456 3.18799 8.69669 3.18799H10.8996C11.1918 3.18799 11.4719 3.30404 11.6785 3.5106C11.8851 3.71717 12.0011 3.99733 12.0011 4.28946V19.7101C12.0011 20.0022 11.8851 20.2824 11.6785 20.4889C11.4719 20.6955 11.1918 20.8115 10.8996 20.8115H8.69669C8.40456 20.8115 8.12439 20.6955 7.91783 20.4889C7.71126 20.2824 7.59521 20.0022 7.59521 19.7101V4.28946Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.19043 7.59534H7.59632" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.59521 16.4053H12.0011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.8851 3.8054L15.2907 3.22162C15.9097 3.07292 16.5387 3.4309 16.7028 4.02789L20.7727 18.8074C20.8445 19.078 20.8127 19.3657 20.6836 19.614C20.5544 19.8624 20.3372 20.0536 20.0744 20.1501L19.9279 20.1953L17.5223 20.7791C16.9033 20.9278 16.2743 20.5698 16.1102 19.9728L12.0403 5.19325C11.9685 4.92268 12.0003 4.63504 12.1294 4.38668C12.2586 4.13832 12.4758 3.94713 12.7386 3.85056L12.8851 3.8054Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1035 8.69681L17.5094 7.59534" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3091 16.4066L19.6302 15.3271" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Books.displayName = 'Books';
export default Books;
