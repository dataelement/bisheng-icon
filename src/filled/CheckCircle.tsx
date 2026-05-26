import { forwardRef } from 'react';
import type { IconProps } from '../types';

const CheckCircle = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 2C14.7614 2 17.2616 3.11907 19.0713 4.92871C20.8809 6.73838 22 9.2386 22 12C22 14.7614 20.8809 17.2616 19.0713 19.0713C17.2616 20.8809 14.7614 22 12 22C9.2386 22 6.73838 20.8809 4.92871 19.0713C3.11907 17.2616 2 14.7614 2 12C2 9.2386 3.11907 6.73838 4.92871 4.92871C6.73838 3.11907 9.2386 2 12 2ZM17.207 8.49316C16.8165 8.10264 16.1835 8.10264 15.793 8.49316L10.5 13.7861L8.20703 11.4932C7.81651 11.1026 7.18349 11.1026 6.79297 11.4932C6.40248 11.8837 6.40245 12.5167 6.79297 12.9072L9.79297 15.9072C10.1835 16.2976 10.8165 16.2977 11.207 15.9072L17.207 9.90723C17.5975 9.51674 17.5975 8.8837 17.207 8.49316Z"/>
    </svg>
  )
);

CheckCircle.displayName = 'CheckCircle';
export default CheckCircle;
