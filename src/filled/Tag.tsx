import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Tag = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12.3024 3C12.8918 3.00004 13.4569 3.23429 13.8736 3.65104L22.4055 12.1851C23.1982 12.9827 23.1981 14.2706 22.4055 15.0681L15.0759 22.4C14.6925 22.7839 14.1721 23 13.6295 23C13.0868 23 12.5665 22.7839 12.183 22.4L3.65213 13.8757C3.23511 13.4589 3.00009 12.894 3 12.3045V5.22222C3 3.99501 3.99506 3.00015 5.22225 3H12.3024ZM8.00005 6.33333C7.0798 6.33353 6.33342 7.07972 6.33337 8C6.33337 8.92033 7.07976 9.66647 8.00005 9.66667C8.92052 9.66667 9.66674 8.92046 9.66674 8C9.66668 7.07959 8.92048 6.33333 8.00005 6.33333Z"/>
    </svg>
  )
);

Tag.displayName = 'Tag';
export default Tag;
