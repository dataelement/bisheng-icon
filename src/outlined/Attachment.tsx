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
      <path d="M12.3608 3.50524L3.66627 12.1998C1.60832 14.2578 1.60832 17.5944 3.66627 19.6523C5.72421 21.7102 9.06082 21.7102 11.1188 19.6523L21.4695 9.30165C22.8414 7.92965 22.8414 5.70525 21.4695 4.33331C20.0975 2.96133 17.8731 2.96133 16.5011 4.33331L6.15041 14.684C5.46447 15.37 5.46447 16.4822 6.15041 17.1682C6.83641 17.8542 7.94861 17.8542 8.63461 17.1682L17.3292 8.47354" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Attachment.displayName = 'Attachment';
export default Attachment;
