import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Attention = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z" stroke="currentColor" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 17.6995C12.6904 17.6995 13.25 17.1398 13.25 16.4495C13.25 15.7591 12.6904 15.1995 12 15.1995C11.3097 15.1995 10.75 15.7591 10.75 16.4495C10.75 17.1398 11.3097 17.6995 12 17.6995Z" fill="currentColor"/>
<path d="M12 6.30054L12 12.3005" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Attention.displayName = 'Attention';
export default Attention;
