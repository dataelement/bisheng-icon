import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Home = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M4.08322 21.4999V8.83332L1.44434 10.9444L11.9999 2.5L22.5554 10.9444L19.9165 8.83332V21.4999H4.08322Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.36108 14.6389V21.5H14.6388V14.6389H9.36108Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M4.08325 21.5H19.9165" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
);

Home.displayName = 'Home';
export default Home;
