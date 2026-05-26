import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FolderOpen = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M1.00005 4.5C1.00005 3.39543 1.89548 2.5 3.00005 2.5H9.50005C9.79679 2.5 10.0786 2.63144 10.2686 2.85938L12.4688 5.5H18.7501C19.8546 5.5 20.7501 6.39542 20.7501 7.5V10.5C20.7501 11.0523 20.3023 11.5 19.7501 11.5H5.28032L2.96978 20.7422C2.84729 21.2321 2.3792 21.5539 1.87798 21.4922C1.37673 21.4305 1.00005 21.005 1.00005 20.5V4.5ZM3.00005 12.3789L3.53032 10.2578L3.58501 10.0967C3.7425 9.73893 4.09871 9.5 4.50005 9.5H18.7501V7.5H12.0001C11.7033 7.5 11.4215 7.36856 11.2315 7.14062L9.0313 4.5H3.00005V12.3789Z"/>
<path d="M22.0001 9.5C22.2996 9.5 22.5835 9.63452 22.7735 9.86621C22.9633 10.0979 23.0393 10.4026 22.9805 10.6963L20.9805 20.6963C20.887 21.1636 20.4767 21.5 20.0001 21.5H2.00005C1.6938 21.5 1.40452 21.3596 1.21489 21.1191C1.02528 20.8785 0.955717 20.5635 1.02739 20.2656L3.43364 10.2656L3.48833 10.1045C3.64399 9.74276 4.00185 9.5 4.4063 9.5H22.0001ZM3.26958 19.5H19.1807L20.7803 11.5H5.19439L3.26958 19.5Z"/>
    </svg>
  )
);

FolderOpen.displayName = 'FolderOpen';
export default FolderOpen;
