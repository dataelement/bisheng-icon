import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FolderOpen = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M2 20.5L4.12127 12.0149C4.34385 11.1246 5.14382 10.5 6.06155 10.5H19.75C19.75 10.2533 19.75 9.37248 19.75 8.5C19.75 7.39543 18.8546 6.5 17.75 6.5H12.9367C12.3432 6.5 11.7803 6.23635 11.4003 5.78037L10.0997 4.21963C9.71971 3.76365 9.15681 3.5 8.56325 3.5H4C2.89543 3.5 2 4.39151 2 5.49608C2 9.70711 2 19.2193 2 20.5Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
<path d="M2 20.5L4.22192 11.2661C4.33004 10.8167 4.732 10.5 5.19417 10.5H20.7802C21.4112 10.5 21.8845 11.0773 21.7608 11.6961L20.1608 19.6961C20.0673 20.1635 19.6569 20.5 19.1802 20.5H2Z" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
    </svg>
  )
);

FolderOpen.displayName = 'FolderOpen';
export default FolderOpen;
