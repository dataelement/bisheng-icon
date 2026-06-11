import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Question = forwardRef<SVGSVGElement, IconProps>(
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
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.26123 9.43899C9.26123 8.89456 9.51355 8.37244 9.96268 7.98747C10.4118 7.6025 11.021 7.38623 11.6561 7.38623H12.3404C12.9755 7.38623 13.5847 7.6025 14.0338 7.98747C14.4829 8.37244 14.7352 8.89456 14.7352 9.43899C14.7604 9.88324 14.6406 10.3237 14.3938 10.6939C14.147 11.0641 13.7865 11.3441 13.3667 11.4917C12.947 11.6886 12.5865 12.0619 12.3397 12.5555C12.0929 13.0492 11.973 13.6364 11.9982 14.2288" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.9976 18.6138C12.6879 18.6138 13.2476 18.0541 13.2476 17.3638C13.2476 16.6734 12.6879 16.1138 11.9976 16.1138C11.3072 16.1138 10.7476 16.6734 10.7476 17.3638C10.7476 18.0541 11.3072 18.6138 11.9976 18.6138Z" fill="currentColor"/>
    </svg>
  )
);

Question.displayName = 'Question';
export default Question;
