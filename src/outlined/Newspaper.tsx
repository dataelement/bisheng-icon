import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Newspaper = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10.5749 21.5001L9.09985 17.7001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.4999 21.4999V6.29993H12.4749L12.9499 10.0999L13.4249 13.8999L13.8999 17.6999L10.575 21.4999H21.4999Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.425 13.9H17.225" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.95 10.1H17.2249" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 2.5H12L12.475 6.29999L12.95 10.1L13.425 13.9L13.9 17.7H10.1H2.5V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.34985 6.29993H8.67485" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.34985 10.1H9.14985" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.34985 13.9H9.62485" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Newspaper.displayName = 'Newspaper';
export default Newspaper;
