import { forwardRef } from 'react';
import type { IconProps } from '../types';

const AddToKnowledgeBase = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M1.86084 19.8986C3.40212 19.0088 5.15049 18.5403 6.93021 18.5403C8.70993 18.5403 10.4583 19.0088 11.9996 19.8986C12.8872 19.3862 13.8435 19.0135 14.8348 18.7895" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.86084 5.25372C3.40212 4.36386 5.15049 3.89539 6.93021 3.89539C8.70993 3.89539 10.4583 4.36386 11.9996 5.25372C13.5409 4.36386 15.2892 3.89539 17.069 3.89539C18.8487 3.89539 20.597 4.36386 22.1383 5.25372" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.86084 5.25378V19.8986" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5.25378V19.8986" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.1392 5.25378V12.0129" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0044 13.8986L20.0044 19.8986" stroke="currentColor" strokeLinecap="round"/>
<path d="M17.0044 16.8986H23.0044" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
);

AddToKnowledgeBase.displayName = 'AddToKnowledgeBase';
export default AddToKnowledgeBase;
