import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Tag = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M22.2097 14.8705L14.88 22.202C14.4966 22.586 13.9762 22.8018 13.4335 22.8018C12.8909 22.8018 12.3705 22.586 11.987 22.202L2.8042 13.027V2.80176H13.0268L22.2097 11.9869C23.0024 12.7846 23.0024 14.0728 22.2097 14.8705Z" stroke="currentColor" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.25 10.5C9.94035 10.5 10.5 9.94035 10.5 9.25C10.5 8.55965 9.94035 8 9.25 8C8.55965 8 8 8.55965 8 9.25C8 9.94035 8.55965 10.5 9.25 10.5Z" fill="currentColor"/>
    </svg>
  )
);

Tag.displayName = 'Tag';
export default Tag;
