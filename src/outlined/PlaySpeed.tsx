import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlaySpeed = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M12 22C12.1756 22 12.3501 21.9955 12.5235 21.9865M12 2C12.1756 2 12.3501 2.00453 12.5235 2.01347M16.5409 3.08805C16.8527 3.24726 17.1551 3.42235 17.447 3.61227M20.3877 6.55304C20.5776 6.84489 20.7527 7.14727 20.9119 7.45911M21.9865 11.4765C21.9955 11.6499 22 11.8244 22 12C22 12.1756 21.9955 12.3501 21.9865 12.5235M20.9119 16.5409C20.7527 16.8527 20.5776 17.1551 20.3877 17.447M17.447 20.3877C17.1551 20.5776 16.8527 20.7527 16.5409 20.9119" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M9.6377 12V9.57165C9.6377 8.80185 10.471 8.32072 11.1377 8.70562L13.2407 9.91981L15.3437 11.134C16.0104 11.5189 16.0104 12.4811 15.3437 12.866L13.2407 14.0802L11.1377 15.2944C10.471 15.6793 9.6377 15.1982 9.6377 14.4284V12Z" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

PlaySpeed.displayName = 'PlaySpeed';
export default PlaySpeed;
