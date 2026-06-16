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
      <path d="M2.5 8.5V19.913C2.5 20.5134 2.94771 21 3.5 21H7.32342" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.75 3.5H3.5C2.94771 3.5 2.5 3.94771 2.5 4.5V8.5H21.5V4.5C21.5 3.94771 21.0523 3.5 20.5 3.5H16.25" stroke="currentColor" strokeLinejoin="round"/>
<path d="M14 5.5H10C8.89543 5.5 8 4.60457 8 3.5C8 2.39543 8.89543 1.5 10 1.5H14C15.1046 1.5 16 2.39543 16 3.5C16 4.60457 15.1046 5.5 14 5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 17H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 13H9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8984 14.5884V16.5792L18.3463 17.4842" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8983 21C19.4398 21 21.5 18.9398 21.5 16.3983C21.5 13.8569 19.4398 11.7966 16.8983 11.7966C14.3569 11.7966 12.2966 13.8569 12.2966 16.3983C12.2966 18.9398 14.3569 21 16.8983 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ApprovalTodo.displayName = 'ApprovalTodo';
export default ApprovalTodo;
