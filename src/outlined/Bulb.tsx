import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Bulb = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2.00024 10.9998H3.11133M12 1V2.11109M20.8887 10.9998H21.9998M4.88907 3.88882L5.66683 4.66659M19.111 3.88882L18.3332 4.66659" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.69728 12.6572C7.04494 13.7701 7.73396 14.7455 8.66675 15.4451C9.10056 15.8745 9.42718 16.4 9.62021 16.9791C9.81323 17.5582 9.86723 18.1745 9.77784 18.7783C9.77784 19.3677 10.012 19.9329 10.4287 20.3497C10.8454 20.7664 11.4107 21.0005 12 21.0005C12.5894 21.0005 13.1546 20.7664 13.5713 20.3497C13.9881 19.9329 14.2222 19.3677 14.2222 18.7783C14.1328 18.1745 14.1868 17.5582 14.3798 16.9791C14.5728 16.4 14.8995 15.8745 15.3333 15.4451C16.2661 14.7455 16.9551 13.7701 17.3027 12.6572C17.6504 11.5442 17.6391 10.3501 17.2704 9.24396C16.9016 8.13781 16.1942 7.17571 15.2483 6.49394C14.3024 5.81218 13.166 5.44531 12 5.44531C10.834 5.44531 9.69759 5.81218 8.75169 6.49394C7.8058 7.17571 7.09838 8.13781 6.72967 9.24396C6.36095 10.3501 6.34962 11.5442 6.69728 12.6572Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.44434 16.5547H14.5553" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Bulb.displayName = 'Bulb';
export default Bulb;
