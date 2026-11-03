import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ApprovalTodo = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2.5 8.5V19.913C2.5 20.5134 2.94771 21 3.5 21H7.32342" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M7.75 3.5H3.5C2.94771 3.5 2.5 3.94771 2.5 4.5V8.5H21.5V4.5C21.5 3.94771 21.0523 3.5 20.5 3.5H16.25" strokeLinejoin="round" stroke="currentColor"/>
<path d="M10 5.5H14C15.1046 5.5 16 4.60457 16 3.5C16 2.39543 15.1046 1.5 14 1.5H10C8.89543 1.5 8 2.39543 8 3.5C8 4.60457 8.89543 5.5 10 5.5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 17H9" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M6 13H9" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M16.8984 14.5884V16.5792L18.3463 17.4842" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M21.5 16.3983C21.5 18.9398 19.4398 21 16.8983 21C14.3569 21 12.2966 18.9398 12.2966 16.3983C12.2966 13.8569 14.3569 11.7966 16.8983 11.7966C19.4398 11.7966 21.5 13.8569 21.5 16.3983Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

ApprovalTodo.displayName = 'ApprovalTodo';
export default ApprovalTodo;
