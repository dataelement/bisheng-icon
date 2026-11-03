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
      <path d="M2.00024 10.9998H3.11133M12 1V2.11109M20.8887 10.9998H21.9998M4.88907 3.88882L5.66683 4.66659M19.111 3.88882L18.3332 4.66659" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M8.66675 15.4451C7.73396 14.7455 7.04494 13.7701 6.69728 12.6572C6.34962 11.5442 6.36095 10.3501 6.72967 9.24396C7.09838 8.13781 7.8058 7.17571 8.75169 6.49394C9.69759 5.81218 10.834 5.44531 12 5.44531C13.166 5.44531 14.3024 5.81218 15.2483 6.49394C16.1942 7.17571 16.9016 8.13781 17.2704 9.24396C17.6391 10.3501 17.6504 11.5442 17.3027 12.6572C16.9551 13.7701 16.2661 14.7455 15.3333 15.4451C14.8995 15.8745 14.5728 16.4 14.3798 16.9791C14.1868 17.5582 14.1328 18.1745 14.2222 18.7783C14.2222 19.3677 13.9881 19.9329 13.5713 20.3497C13.1546 20.7664 12.5894 21.0005 12 21.0005C11.4107 21.0005 10.8454 20.7664 10.4287 20.3497C10.012 19.9329 9.77784 19.3677 9.77784 18.7783C9.86723 18.1745 9.81323 17.5582 9.62021 16.9791C9.42718 16.4 9.10056 15.8745 8.66675 15.4451Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M9.44434 16.5547H14.5553" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

Bulb.displayName = 'Bulb';
export default Bulb;
