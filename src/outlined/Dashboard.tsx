import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Dashboard = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M14.9985 10.9781C14.9985 10.9781 13.4608 15.3126 12.73 16.0693C11.9993 16.826 10.7934 16.8471 10.0367 16.1163C9.27995 15.3855 9.25891 14.1797 9.98967 13.423C10.7204 12.6662 14.9985 10.9781 14.9985 10.9781Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M19.071 20.5355C20.8807 18.7259 22 16.2259 22 13.4645C22 7.94162 17.5229 3.46448 12 3.46448C6.47714 3.46448 2 7.94162 2 13.4645C2 16.2259 3.11929 18.7259 4.92893 20.5355" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3.94067V5.84544" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0692 7.34167L17.5889 8.54034" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.8203 15.0039L18.9644 14.5754" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.17969 15.0039L5.03563 14.5754" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.93091 7.34167L6.41118 8.54039" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Dashboard.displayName = 'Dashboard';
export default Dashboard;
