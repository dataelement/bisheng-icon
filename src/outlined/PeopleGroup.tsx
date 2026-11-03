import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PeopleGroup = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M18.4706 20.5C18.4706 19.4199 18.2576 18.3504 17.8437 17.3526C17.4299 16.3547 16.8232 15.448 16.0585 14.6843C15.2938 13.9206 14.386 13.3147 13.3868 12.9014C12.3877 12.4881 11.3168 12.2753 10.2353 12.2753C9.15382 12.2753 8.08293 12.4881 7.08378 12.9014C6.08463 13.3147 5.17678 13.9206 4.41206 14.6843C3.64734 15.448 3.04074 16.3547 2.62687 17.3526C2.21301 18.3504 2 19.4199 2 20.5M22 20.5C22 18.9711 21.6989 17.4558 21.1119 16.0405C20.5249 14.6251 19.6627 13.3353 18.5728 12.2468C17.7399 11.415 16.7852 10.7148 15.7431 10.1657C16.5152 9.0755 16.9678 7.75108 16.9678 6.33477C16.9677 4.91717 16.5167 3.59076 15.7431 2.5M13.4379 6.33532C13.4379 8.10179 12.004 9.5338 10.2353 9.5338C8.46654 9.5338 7.03268 8.10179 7.03268 6.33532C7.03268 4.56885 8.46654 3.13685 10.2353 3.13685C12.004 3.13685 13.4379 4.56885 13.4379 6.33532Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

PeopleGroup.displayName = 'PeopleGroup';
export default PeopleGroup;
