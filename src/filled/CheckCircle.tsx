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
      <path d="M12 1C15.0373 1 17.7888 2.23217 19.7783 4.22168C21.7678 6.21121 23 8.96273 23 12C23 15.0373 21.7678 17.7888 19.7783 19.7783C17.7888 21.7678 15.0373 23 12 23C8.96273 23 6.21121 21.7678 4.22168 19.7783C2.23217 17.7888 1 15.0373 1 12C1 8.96273 2.23218 6.21121 4.22168 4.22168C6.21121 2.23218 8.96273 1 12 1ZM17.207 8.49316C16.8165 8.10264 16.1835 8.10264 15.793 8.49316L10.5 13.7861L8.20703 11.4932C7.81651 11.1026 7.18349 11.1026 6.79297 11.4932C6.40247 11.8837 6.40245 12.5167 6.79297 12.9072L9.79297 15.9072C10.1835 16.2976 10.8165 16.2977 11.207 15.9072L17.207 9.90723C17.5975 9.51674 17.5975 8.8837 17.207 8.49316Z"/>
    </svg>
  )
);

CheckCircle.displayName = 'CheckCircle';
export default CheckCircle;
