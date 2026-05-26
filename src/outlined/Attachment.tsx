import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Attachment = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12.3535 4.78253L4.92886 12.2072C3.1715 13.9645 3.1715 16.8138 4.92886 18.5711C6.68621 20.3285 9.53546 20.3285 11.2928 18.5711L20.1317 9.7323C21.3032 8.5607 21.3032 6.6612 20.1317 5.48965C18.9601 4.31807 17.0606 4.31807 15.889 5.48965L7.05016 14.3285C6.46441 14.9143 6.46441 15.864 7.05016 16.4498C7.63596 17.0356 8.58571 17.0356 9.17151 16.4498L16.5961 9.02515" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Attachment.displayName = 'Attachment';
export default Attachment;
