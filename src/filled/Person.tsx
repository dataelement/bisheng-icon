import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Person = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <path d="M11.999 13.5464C16.9472 13.5464 20.9596 16.5299 20.96 20.2095C20.96 20.5042 20.9339 20.795 20.8838 21.0796C20.724 21.9886 19.8281 22.5063 18.9053 22.5063H5.09375C4.17084 22.5063 3.27507 21.9885 3.11523 21.0796C3.06521 20.7949 3.03909 20.5043 3.03906 20.2095C3.03941 16.53 7.05103 13.5465 11.999 13.5464ZM12 1.49365C14.8276 1.49377 17.1201 3.78616 17.1201 6.61377C17.12 9.44125 14.8275 11.7338 12 11.7339C9.17241 11.7339 6.88003 9.44132 6.87988 6.61377C6.87988 3.78609 9.17232 1.49365 12 1.49365Z"/>
    </svg>
  )
);

Person.displayName = 'Person';
export default Person;
