import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Info = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z" strokeLinejoin="round" stroke="currentColor"/>
<path d="M12 5.5C12.6904 5.5 13.25 6.05965 13.25 6.75C13.25 7.44035 12.6904 8 12 8C11.3097 8 10.75 7.44035 10.75 6.75C10.75 6.05965 11.3097 5.5 12 5.5Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"/>
<path d="M12.25 17V10H11.75H11.25" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M10.5 17H14" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

Info.displayName = 'Info';
export default Info;
